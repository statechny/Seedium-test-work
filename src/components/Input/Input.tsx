import React from 'react';
import InputModel from './model';

import { StyledLabel } from '../../styled/typography';
import { StyledInput } from './styled';

const Input: React.FunctionComponent<InputModel> = ({
  label,
  type,
  name,
  id,
  isAutoComplete,
  placeholder,
  changeHandler,
}) => {
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        type={type}
        name={name}
        id={id}
        onChange={changeHandler}
        placeholder={placeholder}
        autoComplete={isAutoComplete}
      />
    </>
  );
};

export default Input;
