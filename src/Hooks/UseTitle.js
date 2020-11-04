import React, { useEffect, useState } from "react";
// Document Title 제어

const useTitle = (initTitle) => {
  const [title, setTitle] = useState(initTitle);

  useEffect(() => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }, [title]);

  return setTitle;
};

const UseTitle = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => {
    titleUpdater("Home");
  }, 5000);
  return <div>hi</div>;
};

export default UseTitle;
