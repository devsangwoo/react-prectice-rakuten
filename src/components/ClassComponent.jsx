import React, { Component } from 'react';

export class ClassComponent extends Component {
  static defaultProps = {
    name: '이름없음',
  };
  render() {
    return (
      <div>
        {this.props.isSpecial && <b>*</b>}
        안녕하세요 클래스형컴포넌트입니다. 프롭스에서 받은 이름값은 : {this.props.name}
      </div>
    );
  }
}

export default ClassComponent;
