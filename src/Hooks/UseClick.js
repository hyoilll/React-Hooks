import React, { useEffect, useRef } from "react";
//

const useClick = () => {
  const e = useRef();
  const onClick = () => console.log("hello");
  useEffect(() => {
    if (e.current) {
      e.current.addEventListener("click", onClick);
    }

    // componentWillUnMount
    return () => {
      if (e.current) {
        e.current.removeEventListener("click", onClick);
      }
    };
  });
  return e;
};

const UseClick = () => {
  const refer = useClick();

  return (
    <>
      <div ref={refer}>UseClick</div>
    </>
  );
};

export default UseClick;
