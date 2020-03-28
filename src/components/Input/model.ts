import React from 'react';

export default interface InputModel {
  label: React.ReactText;
  type: JSX.IntrinsicElements['input']['type'];
  name: JSX.IntrinsicElements['input']['name'];
  id: JSX.IntrinsicElements['input']['id'];
  isAutoComplete: JSX.IntrinsicElements['input']['autoComplete'];
  placeholder: JSX.IntrinsicElements['input']['placeholder'];
  changeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
