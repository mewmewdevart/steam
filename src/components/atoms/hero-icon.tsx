import * as OutlineIcons from '@heroicons/react/24/outline';
import * as SolidIcons from '@heroicons/react/24/solid';
import React from 'react';

export type IconName = keyof typeof OutlineIcons | keyof typeof SolidIcons;

export const iconNames: IconName[] = [...Object.keys(OutlineIcons), ...Object.keys(SolidIcons)] as IconName[];

export interface IconProps extends React.ComponentProps<'svg'> {
  icon: IconName;
  extraClassNames?: string;
  ariaLabel?: string;
  type: string;
}

const HeroIcon: React.FC<IconProps> = ({ icon, extraClassNames, ariaLabel, type, ...attrs }) => {
  let IconComponent;

  /* eslint-disable no-console */
  if (type == 'solid' && SolidIcons[icon]) {
    IconComponent = SolidIcons[icon];
  } else if (type == 'outline' && OutlineIcons[icon]) {
    IconComponent = OutlineIcons[icon];
  } else {
    console.error(`Ícone "${icon}" não encontrado.`);
    return null;
  }
  /* eslint-enable no-console */

  return <IconComponent className={`${extraClassNames}`} aria-label={ariaLabel} {...attrs} />;
};

export default HeroIcon;