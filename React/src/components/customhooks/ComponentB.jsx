import React from "react";
import useCounting from "../../hooks/UseCounting";

const ComponentB = () => {
  const {count, increment, decrement} = useCounting(0)
  return (
    <div>
      <h1>Component B</h1>
      <div className="btnCom">
        <button onClick={()=> increment(2)}>+</button>
        <p>{count}</p>
        <button onClick={()=> decrement(2)}>-</button>
      </div>
    </div>
  );
};

export default ComponentB;
