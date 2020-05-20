import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: 30px;
  padding: 5px;
  background: #00a3ad;
`;

const Message = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: #e1faff;
`;

const Link = styled.a`
  color: white;
  font-weight: 700;
`;

const Header = () => (
  <StyledHeader data-testid="header">
    <Message>
      Made by
      { ' ' }
      <Link href="https://github.com/bnaut">Andrew Bennett</Link>
    </Message>
  </StyledHeader>
);

export default Header;