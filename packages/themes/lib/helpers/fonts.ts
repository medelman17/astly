import fetch from 'node-fetch';
import fs from 'fs';

const opentype = require('opentype.js');

const API_KEY = `ENTER YOUR API KEY HERE`;
const API_URL = (key: string) =>
  `https://www.googleapis.com/webfonts/v1/webfonts?key=${key}`;
const FONT_LIST_FILE = 'fonts/fontList.json';

type FontListResponseItem = {
  kind: string;
  family: string;
  category: string;
  variants: string[];
  subsets: string[];
  version: string;
  files: {[index: string]: string};
};

main({key: API_KEY});

async function main({flFile, key}: {flFile?: string; key?: string}) {
  let fontList: FontListResponseItem[];
  if (flFile === undefined) {
    fontList = await askGoogleForFontList(key);
    await saveFontListToDisk(fontList);
  } else {
    fontList = await readFontListFromDisk(flFile)
      .then(buffer => buffer.toString())
      .then(json => JSON.parse(json));
  }

  const map: {[index: string]: any} = {};

  function handleFont(fontInfo: FontListResponseItem) {
    const {variants, files, family, version} = fontInfo;
    const individualFontMap: any = {...fontInfo};
    return new Promise((res, rej) => {
      const pj = variants.map(async variant => {
        const url = files[variant];
        const fileExt = url.split('.')[url.split('.').length - 1];
        const fileName = `${family}--${variant}--${version}.${fileExt}`;
        const fontBuffer: Buffer = (await fetchFont(url, fileName)) as Buffer;
        const font = await opentype.parse(fontBuffer);
        // @ts-ignore
        delete font.glyphs;
        delete font.position;
        delete font.substitution;
        individualFontMap[variant] = font;
      });
      Promise.all(pj)
        .then(() => {
          map[family] = individualFontMap;
        })
        .then(() => res());
    });
  }

  const fontPromises: Promise<any>[] = fontList
    .slice(0, 300)
    .map(font => handleFont(font));

  Promise.all(fontPromises)
    .then((done: any) => {
      return writeFileToDisk('fontMap.json', JSON.stringify(map));
    })
    .then(() => console.log('done'));
}

async function askGoogleForFontList(key: string) {
  const url = API_URL(key);
  const {items: fontList}: {items: FontListResponseItem[]} = await fetch(
    url,
  ).then(r => r.json());

  return fontList;
}

async function saveFontListToDisk(fontList: object) {
  const fileName = await writeFileToDisk(
    'fontList.json',
    JSON.stringify(fontList),
  );
  return fileName;
}

function fetchFont(url: string, filename: string) {
  return fetch(url).then(res => res.arrayBuffer());
}

function writeFileToDisk(fileName: string, file: string | Buffer) {
  return new Promise((res, rej) => {
    fs.writeFile(`./fonts/${fileName}`, file, err => {
      if (err) {
        rej(err);
      }
      res(fileName);
    });
  });
}

function readFontListFromDisk(filename: string) {
  return new Promise((res, rej) => {
    fs.readFile(filename, (err, data) => {
      if (err) {
      }
      res(data);
    });
  });
}
