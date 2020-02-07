import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #fff;
  padding: 20px 0;
  margin-bottom: 80px;
`;

export const Logo = styled.a`
  cursor: pointer;
  color: var(--font-balck);
  transition: color 0.3s;
  &:hover {
    color: var(--blue);
  }
  h1 {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: var(--font-balck);
  font-size: 14px;
  font-weight: 600;
  transition: color 0.3s;
  &:not(last-of-type) {
    margin-right: 20px;
  }
  &:hover {
    color: var(--blue);
  }
  &.active {
    color: var(--blue);
  }
`;
