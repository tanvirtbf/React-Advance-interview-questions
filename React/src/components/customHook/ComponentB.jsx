import React, { useState } from "react";

const ComponentB = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Component B</h1>
      <div className="btnCom">
        <button onClick={() => setCount(count + 2)}>+</button>
        <p>{count}</p>
        <button onClick={() => setCount(count - 2)}>-</button>
      </div>
    </div>
  );
};

export default ComponentB;
