import React from "react";
// input을 업데이트 함

const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

const UsePreventLeave = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </>
  );
};

export default UsePreventLeave;
