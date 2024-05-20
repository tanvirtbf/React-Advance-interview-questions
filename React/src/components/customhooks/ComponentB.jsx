import useLocalStorage from "../../hooks/UseLocalStorage";

const ComponentB = () => {
  const { val, setValue } = useLocalStorage("countB", 0);
  return (
    <div>
      <h1>Component B</h1>
      <div className="btnCom">
        <button onClick={() => setValue(val + 2)}>+</button>
        <p>{val}</p>
        <button onClick={() => setValue(val - 2)}>-</button>
      </div>
    </div>
  );
};

export default ComponentB;
