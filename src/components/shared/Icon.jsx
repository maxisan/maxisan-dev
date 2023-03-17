import React from "react";
import * as AntDesign from "react-icons/ai";
import * as SimpleIcons from 'react-icons/si'

const Icon = ({ iconName, collection }) => {
  let baseIcon

  if (collection === 'ai') baseIcon = AntDesign[iconName]
  if (collection === 'si') baseIcon = SimpleIcons[iconName]

  if (!baseIcon) return null

  return React.createElement(baseIcon);
};

export default Icon