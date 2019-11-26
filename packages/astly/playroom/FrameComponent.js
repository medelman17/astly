import React from "react";
import withRoot from "../lib/components/Root";

import "./styles.scss";

export default withRoot(({ children, ...props }) => {
  console.log(props);
  return <>{children}</>;
});
