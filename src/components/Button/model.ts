import React from 'react';

export default interface ButtonModel {
  text: string;
  type: JSX.IntrinsicElements['button']['type'];
  isDisabled?: JSX.IntrinsicElements['button']['disabled'];
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
