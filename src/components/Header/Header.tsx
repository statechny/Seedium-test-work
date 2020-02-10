import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { Container } from '../../styled';
import { StyledHeader, Logo, FlexRow, StyledLink } from './styled';

const Header: React.FunctionComponent = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexRow>
          <Logo as={Link} to="/">
            <h1>Academies</h1>
          </Logo>
          <nav>
            <FlexRow as="ul">
              <li>
                <StyledLink as={NavLink} exact to="/">
                  Academies
                </StyledLink>
              </li>
              <li>
                <StyledLink as={NavLink} to="/create">
                  Create Academy
                </StyledLink>
              </li>
            </FlexRow>
          </nav>
        </FlexRow>
      </Container>
    </StyledHeader>
  );
};

export default Header;
