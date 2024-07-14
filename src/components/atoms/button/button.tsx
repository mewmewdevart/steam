import React from 'react';
import HeroIcon, { IconName } from '@components/atoms/hero-icon';
import style from './button.module.css';

type ButtonProps = {
  iconName?: IconName;
  iconType?: string;
  iconColor?: string;
  label: string;
  extraClassNames?: string;
};

const Button: React.FC<ButtonProps> = ({ label, iconType, iconName, iconColor, extraClassNames }) => {
  return (
    <button className={style.ButtonPrimary}>
      <HeroIcon icon={iconName ?? ''} type={iconType} extraClassNames={`w-6 h-6 ${iconColor}`} />
      {label}
    </button>
  );
};

export default Button;
