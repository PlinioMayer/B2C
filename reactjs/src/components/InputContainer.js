import React, {useState} from 'react';
import styled from 'styled-components';
import InputLabel from './InputLabel';
import InputText from './InputText';
import Warning from './Warning';

const InputContainerDiv = styled.div`
  width: 30%;
  align-self: start;
  text-align: right;
`;

const InputDiv = styled.div`
  margin: ${props => props.margin? props.margin : '0'};
  width: 100%;
  display: flex;
`;

const InputContainer = () => {
  let [decimalValue, setDecimalValue] = useState('');
  let [warned, setWarned] = useState(false);

  const computeBinary = event => {
    if(event.currentTarget.value === '') {

      setDecimalValue('');

    } else {

      const charArray = event.currentTarget.value.split('');

      if(!charArray.every(x => x === '1' || x === '0')) {
        
        setWarned(true);
        setDecimalValue('');

      } else {
        setWarned(false);
        setDecimalValue(charArray.reduce((acumulador, atual, index, array) => {
          return acumulador + atual * Math.pow(2, array.length - index - 1);
        }, 0));
      }
    }
  }

  return (
    <InputContainerDiv>
      <InputDiv>
        <InputLabel for="binario">Binário:</InputLabel>
        <InputText onChange={computeBinary} id="binario" />
      </InputDiv>
      {warned ? <Warning>*apenas 1 e 0</Warning> : ''}

      <InputDiv margin="30px 0 0">
        <InputLabel for="decimal">Decimal:</InputLabel>
        <InputText value={decimalValue} readOnly />
      </InputDiv>
    </InputContainerDiv>
  );
};

export default InputContainer;