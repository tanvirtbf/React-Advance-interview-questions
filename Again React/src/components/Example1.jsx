import { useEffect, useState } from "react";

const Example1 = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMove = (e)=>{
    console.log(e)
    setMousePos({ x: e.clientX, y: e.clientY });
  }
  useEffect(() => {
    document.addEventListener("mousemove", handleMove);

    return ()=>{
      document.removeEventListener("mousemove",handleMove)
    }
  }, []);
  return (
    <div>
      x - {mousePos.x}, y - {mousePos.y}
    </div>
  );
};

export default Example1;
