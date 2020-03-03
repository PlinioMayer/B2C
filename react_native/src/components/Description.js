import React from 'react';
import styled from 'styled-components/native';

const DescriptionText = styled.Text`
  width: 60%;
  font-size: 17px;
  text-align: center;
  margin-top: 100px;
`;

const DescriptionView = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Description = () => (
  <DescriptionView>
    <DescriptionText>
      Bem-vindo ao conversor B2C, para começar digite um número binário e ele será convertido para decimal.
    </DescriptionText>
  </DescriptionView>
);

export default Description;