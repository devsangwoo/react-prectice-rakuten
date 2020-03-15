import React from 'react';

import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import PracticeLogic from './components/PracticeLogic';
import Counter from './components/Counter';
import UseCallback from './components/UseCallback';
import ClassComponent from './components/ClassComponent';
import CounterClass from './components/CounterClass';

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
  color: black
}

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <ClassComponent isSpecial name="react" />
      </TodoTemplate>
      <TodoTemplate>
        <CounterClass />
      </TodoTemplate>
      <TodoTemplate>
        <UseCallback />
      </TodoTemplate>
      <TodoTemplate>
        <PracticeLogic />
        <Counter />
      </TodoTemplate>
    </>
  );
}

export default App;
