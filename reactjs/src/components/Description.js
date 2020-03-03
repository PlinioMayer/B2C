import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  width: 60%;
  font-size: 1.5vw;
  text-align: center;
`;

const Description = () => (
  <Text>Bem-vindo ao conversor B2D, para começar digite um número binário e ele será convertido para decimal.</Text>
);

export default Description;
