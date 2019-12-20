import {findAndParseIncognitoNumbers} from '@astly/helpers';

function cleanTextProps(props) {
  let {style} = props;

  return {
    ...props,
    style: findAndParseIncognitoNumbers(style),
  };
}

export default cleanTextProps;
