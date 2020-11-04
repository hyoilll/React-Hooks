import React from "react";
// 하려고 하는 작업이 정말 맞는 작업인지, 다시한번 사용자에게 확인하는 것

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};

const UseConfirm = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);

  return (
    <>
      <button onClick={confirmDelete}>Delete the world</button>
    </>
  );
};

export default UseConfirm;
