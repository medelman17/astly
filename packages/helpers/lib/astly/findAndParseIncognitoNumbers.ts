import numberRe from '../re/numberRe';

function findAndParseIncognitoInts(obj: object | string) {
  if (obj && typeof obj === 'object') {
    for (let key in obj) {
      const val = obj[key];
      if (typeof val === 'string') {
        const m = val.match(numberRe);
        if (m !== null) {
          obj[key] = parseInt(m[0]);
        }
      }
    }
  }
  return obj;
}

export default findAndParseIncognitoInts;
