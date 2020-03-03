import React from 'react';
import styled from 'styled-components/native';

const HeaderView = styled.View`
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: rgb(3, 162, 194);
  elevation: 50;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  shadow-color: black;
  shadow-offset: 0 1px;
  shadow-radius: 10px;
`;

const HeaderText = styled.Text`
  color: rgb(35, 35, 35);
  font-size: 25px;
`;

const Header = () => (
  <HeaderView>
    <HeaderText>B2C</HeaderText>
  </HeaderView>
);

export default Header;