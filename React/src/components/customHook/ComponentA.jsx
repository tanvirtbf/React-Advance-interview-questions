import useCounting from "../../hook/useCounting";

const ComponentA = () => {
  const { count, increment, decrement } = useCounting(0);
  return (
    <div>
      <h1>Component A</h1>
      <div className="btnCom">
        <button onClick={() => increment(1)}>+</button>
        <p>{count}</p>
        <button onClick={() => decrement(1)}>-</button>
      </div>
    </div>
  );
};

export default ComponentA;
