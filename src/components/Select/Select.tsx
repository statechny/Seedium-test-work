import React from 'react';
import ReactSelect from 'react-select';
import SelectModel from './model';

import { StyledLabel } from '../../styled/typography';
import { StyledSelect } from './styled';

const Select: React.FunctionComponent<SelectModel> = ({
  options,
  label,
  changeHandler,
}) => {
  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect
        as={ReactSelect}
        options={options}
        onChange={changeHandler}
      />
    </>
  );
};

export default Select;
