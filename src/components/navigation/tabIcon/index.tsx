import React from 'react';
import Discover from '../../../assets/icons/Discover';
import Star from '../../../assets/icons/Star';
import {SCREEN_NAMES} from '../../../constants/names';

interface TabBarIconProps {
  name?: string;
  color?: string;
  size?: number;
  focused?: boolean;
}

function TabBarIcon({name, color, size, focused}: TabBarIconProps) {
  let IconComponent;

  switch (name) {
    case SCREEN_NAMES.HOME:
      IconComponent = Discover;
      break;
    case SCREEN_NAMES.WALLET:
      IconComponent = Star;
      break;
    default:
      return null;
  }

  return IconComponent ? (
    <IconComponent width={size} height={size} focus={focused} />
  ) : null;
}

export default TabBarIcon;
