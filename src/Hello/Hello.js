import React from 'react';
import PropTypes from 'prop-types';

/**
 * 안녕하세요라고 보여주고 싶을때는 Hello컴포넌트를 사용하세요.
 * 
 * - big을 true로 설정하면 컴포넌트가 **크게** 나타납니다.
 * 함수도 지정할 수 있어요.
 *  */
const Hello = ({ name, big, onHello, onBye }) => {
  return (
    <div>
      {big ? <h1>안녕하세요, {name}!</h1> : <p>안녕하세요, {name}!</p>}
      <div>
        <button onClick={onHello}>Hello</button>
        <button onClick={onBye}>Bye</button>
      </div>
    </div>
  );
};

Hello.propTypes= {
    /** 보여주고 싶은 이름 */
    name: PropTypes.string.isRequired,
    /**true 설정시 h1태그로 렌더링 */
    big : PropTypes.bool,
    /** Hello버튼 누를때 호출 */
    onHello: PropTypes.func,
    /** Bye버튼을 누를때 호출 */
    onBye : PropTypes.func
}

Hello.defaultProps = {
    big: false
}

export default Hello;