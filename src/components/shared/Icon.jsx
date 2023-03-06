import React from "react";
import * as Brands from "react-icons/ai";

const Icon = ({ iconName }) => {
  const baseIcon = Brands[iconName]
  if (!baseIcon) return null

  return React.createElement(baseIcon);
};

export default Icon