import React, { useEffect, useState } from "react";

const Example1 = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      console.log(e);
      setMousePos({ x: e.clientX, y: e.clientY });
    });
  }, []);
  return (
    <div>
      x - {mousePos.x}, y - {mousePos.y}
    </div>
  );
};

export default Example1;
