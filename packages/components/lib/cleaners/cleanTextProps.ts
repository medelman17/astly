import {findAndParseIncognitoNumbers} from '@astly/helpers';
import {TextProps} from '../components/Text/Text';
function cleanTextProps(props: TextProps) {
  let {style} = props;

  return {
    ...props,
    style: findAndParseIncognitoNumbers(style),
  };
}

export default cleanTextProps;
