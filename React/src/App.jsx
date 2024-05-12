import { useState } from "react";
import "./App.css";

const App = () => {
  const [mousePos, setMousePos] = useState({x:0, y:0})
  const [width,setWidth] = useState(100)
  const [height,setHeight] = useState(100)

  document.addEventListener("mousemove", (data) => {
    setMousePos({x: data.clientX, y:data.clientY})
    setWidth(mousePos.x)
    setHeight(mousePos.y)
  })
  return (
    <>
      <div> X - {mousePos.x}, Y - {mousePos.y} </div>
      <img src="https://cdn.beautybooth.com.bd/uploads/all/2FK8ylB5lJrDP9PnIGzensEaeaDcvT7jAD0ZGLxH.jpg" alt="" style={{width:`${width}px`,height:`${height}px`}} />
    </>
  );
};

export default App;
