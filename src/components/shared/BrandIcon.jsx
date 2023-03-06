import React from "react";
import * as Brands from "react-icons/si";

const BrandIcon = ({ iconName }) => {
  const baseIcon = Brands[iconName]
  if (!baseIcon) return null

  return React.createElement(baseIcon);
};

export default BrandIcon