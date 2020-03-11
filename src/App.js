import React from "react";

import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import PracticeLogic from "./components/PracticeLogic";
import Counter from "./components/Counter";

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef
}

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>안녕하세요</TodoTemplate>
      <TodoTemplate>
        <PracticeLogic />
        <Counter />
      </TodoTemplate>
    </>
  );
}

export default App;
