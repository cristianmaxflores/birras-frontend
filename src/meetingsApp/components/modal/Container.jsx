import React from "react";
import Create from "./Create";
import { modes } from "../../main";

export default (props) => {
  const { modalMode } = props;
  if (modalMode === modes.CREATE) {
    return <Create />;
  }
  return null;
};
