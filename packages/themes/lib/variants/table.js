import { invert } from "polished";

export function getTableVariants(props) {
  return {
    row: {
      header: {
        backgroundColor: props.colors.primary,
        paddingTop: "10px",
        paddingBottom: "10px"
      },
      body: {
        flexDirection: "column",
        paddingTop: "10px",
        paddingBottom: "10px"
      },
      normal: {
        paddingTop: "10px",
        paddingBottom: "10px"
      }
    },
    cell: {
      header: {
        color: "white"
      }
    },
    outlined: {
      border: 1,
      borderColor: props.colors.primary
    },
    header: {
      color: invert(props.colors.primary)
    }
  };
}
