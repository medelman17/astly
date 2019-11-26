export function getBoxVariants(props) {
  const { space } = props;
  return {
    row: {
      flexDirection: "row",
      padding: space[1]
    },
    col: {
      flexDirection: "column",
      padding: space[1]
    },
    normal: {
      padding: space[1]
    }
  };
}
