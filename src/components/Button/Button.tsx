import React from 'react';
import ButtonModel from './model';

import { StyledButton } from './styled';
import Spinner from '../Spiner';

const Button: React.FunctionComponent<ButtonModel> = ({
  text,
  type,
  isDisabled,
  clickHandler,
}) => {
  return (
    <StyledButton type={type} disabled={isDisabled} onClick={clickHandler}>
      {text}
      {isDisabled && <Spinner />}
    </StyledButton>
  );
};

export default Button;
