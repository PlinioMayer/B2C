import React from 'react';
import styled from 'styled-components/native';

const WarnText = styled.Text`
  font-size: 13px;
  color: red;
  width: 80%;
  text-align: right;
`;

const Warning = () => (
  <WarnText>*Apenas 1 e 0</WarnText>
);

export default Warning;