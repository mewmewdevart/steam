import * as OutlineIcons from '@heroicons/react/24/outline';
import * as SolidIcons from '@heroicons/react/24/solid';
import React from 'react';

export type IconName = keyof typeof OutlineIcons | keyof typeof SolidIcons;

export const iconNames: IconName[] = [...Object.keys(OutlineIcons), ...Object.keys(SolidIcons)] as IconName[];

export interface IconProps extends React.ComponentProps<'svg'> {
  icon: IconName;
  extraClassNames?: string;
  ariaLabel?: string;
  type: 'solid' | 'outline';
}

const HeroIcon: React.FC<IconProps> = ({ icon, extraClassNames, ariaLabel, type, ...attrs }) => {
  let IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>> | undefined;

  /* eslint-disable no-console */
  if (type === 'solid') {
    IconComponent = SolidIcons[icon as keyof typeof SolidIcons];
  } else if (type === 'outline') {
    IconComponent = OutlineIcons[icon as keyof typeof OutlineIcons];
  }
  
  if (!IconComponent) {
    console.error(`Ícone "${icon}" não encontrado.`);
    return null;
  }
  /* eslint-enable no-console */

  return <IconComponent className={extraClassNames} aria-label={ariaLabel} {...attrs} />;
};

export default HeroIcon;
