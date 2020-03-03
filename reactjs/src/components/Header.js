import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  height: 4.5vw;
  width: 100%;
  line-height: 4.5vw;
  font-size: 2vw;
  text-align: center;
  box-shadow: 1px 0 20px 1px;
  background-color: rgb(3, 162, 194);
  color: rgb(35, 35, 35);
  position: absolute;
  top: 0;
  left: 0;
`;

const Header = () => (
  <HeaderDiv>B2D</HeaderDiv>
);

export default Header;
