import React, { useEffect, useState } from "react";

/**
 * componentDidMount, componentDidUpdate, componentWillUnMount의 역할을 수행
 * useEffect(callback, [deps])
 * deps에 속한 변수를 setState할 시에 componentDidUpdate로 작동
 *  */

const UseEffect = () => {
  const [item, setItem] = useState(0);
  useEffect(() => {
    console.log("hello");
  }, [item]);

  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <>
      <div className="app">{item}</div>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </>
  );
};

export default UseEffect;
