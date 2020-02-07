import React from 'react';
import Select from 'react-select';
import SelectModel from './model';

import { StyledLabel } from '../../styled/typography';
import { StyledSelect } from './styled';

const MySelect: React.FunctionComponent<SelectModel> = ({
  options,
  label,
  changeHandler,
}) => {
  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect as={Select} options={options} onChange={changeHandler} />
    </>
  );
};

export default MySelect;
