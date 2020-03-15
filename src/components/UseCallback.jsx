import React, { useState, useCallback } from 'react';

const UseCallback = () => {
  const initialState = {
    text: 'Hello',
    done: false,
  };
  const [todo, setTodo] = useState({ initialState });

  const onClick = useCallback(() => {
    setTodo(todo => ({ ...todo, done: !todo.done }));
    //produce(draft=>{draft.done = !draft.done})
    //까다로운 객체의 불변성 유지를 위해 쓰임
    //임머없이 맵으로 하는것=> 네이티브 리듀서형식의 코드
    //자바스크립트 엔진중 프록시를 사용함, 리액트 네이티브에서못씀,
    //그런경우에는 es5로 사용
    //데이터 구조가 복잡해져서 불변성 유지하기 어려울때 임머를 사용함
    //concat, filter가 편할수도있음
  }, []);
  console.log(todo);
  return (
    <>
      <h1>{todo.done}</h1>
      <div>
        함수형 업데이트를 하는경우 임머가 효과적임. 프로듀서 함수에 첫번째 파람에 스테이트를 넣음
        두번째 파람에 드래프트를 파라미터로 가져온 함수
      </div>
      <button onClick={onClick}>버튼</button>
    </>
  );
};

export default UseCallback;
