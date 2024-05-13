import { useState } from "react";

const Destroy = () => {
  const [asix, setAxis] = useState({ x: 0, y: 0 });

  document.addEventListener("mousemove", (data) => {
    setAxis({ x: data.clientX, y: data.clientY });
  });

  return (
    <>
      <h1>X: {asix.x} and Y: {asix.y}</h1>
    </>
  )
};

export default Destroy;
