import React from 'react';
import { HeaderStyle, Logo, HeaderTitle } from '../styles/headerStyle';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <HeaderStyle>
      <Logo>Y</Logo>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <HeaderTitle>Hacker News</HeaderTitle>
      </Link>
    </HeaderStyle>
  );
}

export default Header;
