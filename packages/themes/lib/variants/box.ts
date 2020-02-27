export function getBoxVariants(props) {
  const {space} = props;
  return {
    row: {
      display: 'flex',
      flexDirection: 'row',
      padding: space[1],
    },
    col: {
      display: 'flex',
      flexDirection: 'column',
      padding: space[1],
    },
    normal: {
      display: 'flex',
      flexDirection: 'column',
      padding: space[1],
    },
  };
}
