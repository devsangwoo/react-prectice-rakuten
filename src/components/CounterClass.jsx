import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class CounterClass extends Component {
  //   constructor(props) {
  //     super(props);
  //     // this.handleIncrease = this.handleIncrease.bind(this);
  //     // this.handleDecrease = this.handleDecrease.bind(this);
  //     this.state = {
  //       counter: 0,
  //     };
  //   }
  //   static propTypes = {};
  state = {
    counter: 0,
    fixed: 1,
    updateMe: {
      toggleMe: false,
      dontChangeMe: 1,
    },
    //클래스프로퍼티로서 바벨이 읽게해줌
  };

  handleIncrease = () => {
    console.log(this);
    console.log('increase');
    this.setState({ counter: this.state.counter + 1 });
  };
  handleDecrease = () => {
    console.log('decrease');
    this.setState(state => ({ counter: state.counter - 1 }));
    this.setState(state => ({ counter: state.counter - 1 }));
    //2가빠짐
  };
  handleToggle = () => {
    this.setState({
      updateMe: {
        ...this.state.updateMe,
        toggleMe: !this.state.updateMe.toggleMe,
      },
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <div>고정된값 :{this.state.fixed}</div>

        <div>-----</div>
        <div>+++설명+++</div>
        <div>버튼 이벤트에 등록하는 순간 this가 가리키는게 무엇인지모르게됨</div>
        <div> 각 메서드와 컴포넌트 인스턴스의 관계가 끊겨버리기 때문입니다.</div>
        <div>1.해결법은 constructor로 바인딩해줌</div>
        <div>2.함수를 만들때 애로우 펑션으로 해주면됨</div>
        <div>스테이트는 무조건 객체여야함</div>
        <div>setstate는 업데이트할 녀석만 지정해주면 그녀석만 업데이트함</div>
        <div>
          상태안에들어있는것이 객체이면, 객체를 업데이트할때는항상 불변성유지(객체를 통째로
          집어넣음)
        </div>
        <div>
          업데이트를 함수형업데이트로 줄수있음, 셋스테이트는 상태로 요청을 해달라는것임,
          비동기적으로 업데이트됨 따라서 함수형으로 해주면 4가 올라감
        </div>
      </div>
    );
  }
}

export default CounterClass;
