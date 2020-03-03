import React from 'react';
import styled from 'styled-components';
import InputLabel from './InputLabel';
import InputText from './InputText';

const InputDiv = styled.div`
  margin: ${props => props.margin? props.margin : '0'};
  width: 100%;
  display: flex;
`;

const Input = ({name, divMargin, onChange, value}) => (
  <InputDiv margin={divMargin}>
    <InputLabel for={name}>{name === 'binario' ? 'Binário:' : 'Decimal:'}</InputLabel>
    <InputText value={value} onChange={onChange} readOnly={(name !== 'binario')} id={name} />
  </InputDiv>
);

export default Input;