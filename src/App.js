import React from 'react';
import './App.scss';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import PracticeLogic from './components/PracticeLogic';
import Counter from './components/Counter';
import UseCallback from './components/UseCallback';
import ClassComponent from './components/ClassComponent';
import CounterClass from './components/CounterClass';
import Button from './components/Button';

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
      <div className="App">
        <div className="buttons">
          <Button size="large">Large BUTTON</Button>
          <Button>Default BUTTON</Button>
          <Button size="small">Small BUTTON</Button>
        </div>
        <div className="buttons">
          <Button color="pink" size="large">
            Large BUTTON
          </Button>
          <Button color="pink">Default BUTTON</Button>
          <Button color="pink" size="small">
            Small BUTTON
          </Button>
        </div>
        <div className="buttons">
          <Button color="violet" size="large">
            Large BUTTON
          </Button>
          <Button color="violet">Default BUTTON</Button>
          <Button color="violet" size="small">
            Small BUTTON
          </Button>
        </div>
        <div className="buttons">
          <Button size="large" outline={true}>
            Large BUTTON
          </Button>
          <Button color="violet" outline={true}>
            Default BUTTON
          </Button>
          <Button color="pink" size="small" outline={true}>
            Small BUTTON
          </Button>
        </div>
        <div className="buttons">
          <Button size="large" fullWidth={true}>
            Large BUTTON
          </Button>
          <Button color="violet" size="large" fullWidth={true}>
            Default BUTTON
          </Button>
          <Button
            color="pink"
            size="large"
            fullWidth={true}
            onClick={() => console.log('클릭')}
            onMouseMove={() => console.log('온마우스')}
          >
            Small BUTTON
          </Button>
        </div>
      </div>

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
