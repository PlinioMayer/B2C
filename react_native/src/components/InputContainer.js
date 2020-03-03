import React, {useState} from 'react';
import styled from 'styled-components/native';
import Warning from './Warning';

const InputView = styled.View`
  margin-top: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const InputText = styled.TextInput`
  font-size: 15px;
  width: 80%;
  border-radius: 5px;
  background-color: lightgray;
  marginTop: ${props => props.marginTop ? props.marginTop : '0'};
`;

const InputContainer = () => {
  let [decimalValue, setDecimalValue] = useState('Decimal');
  let [warned, setWarned] = useState(false);

  const computeBinary = ({nativeEvent: {text}}) => {
    if(text === '') {

      setDecimalValue('Decimal');

    } else {

      const charArray = text.split('');

      if(!charArray.every(x => x === '1' || x === '0')) {
        
        setWarned(true);
        setDecimalValue('');

      } else {
        setWarned(false);
        setDecimalValue(charArray.reduce((acumulador, atual, index, array) => {
          return acumulador + atual * Math.pow(2, array.length - index - 1);
        }, 0).toString());
      }
    }
  }

  return (
      <InputView enabled={true} behavior="position">
        <InputText onChange={computeBinary} placeholder="Binário" />
        {warned? <Warning /> : <></>}
        <InputText value={decimalValue} marginTop="20px" editable={false} />
      </InputView>
  );
};

export default InputContainer;