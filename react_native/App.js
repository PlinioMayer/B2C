import React from 'react';
import Header from './src/components/Header';
import styled from 'styled-components/native';
import Description from './src/components/Description';
import InputContainer from './src/components/InputContainer';

const Container = styled.ScrollView`
  flex: 1;
  background-color: rgb(3, 162, 194);
`;

function App() {
  return (
    <Container>
      <Header />
      <Description />
      <InputContainer />
    </Container>
  );
}

export default App;
