import { useEffect, useState } from "react";

const DestroyCom = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMove = (data) => {
    setMousePos({ x: data.clientX, y: data.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMove);

    return () => {
      // document.removeEventListener("mousemove", (data) => {
      //   setMousePos({ x: data.clientX, y: data.clientY });
      // });  this is not currect because same function pointer needed

      document.removeEventListener("mousemove", handleMove)
    };
  }, []);

  return (
    <div>
      X : {mousePos.x} and Y : {mousePos.y}
    </div>
  );
};

export default DestroyCom;
