import React from 'react';
import { OptionsType } from 'react-select';

export default interface SelectModel {
  label: React.ReactText;
  options: OptionsType<{ [key: string]: string }>;
  changeHandler?: any;
}
