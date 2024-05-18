import { useState } from "react";

const ComponentA = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Component A</h1>
      <div className="btnCom">
        <button onClick={() => setCount(count + 1)}>+</button>
        <p>{count}</p>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};

export default ComponentA;
