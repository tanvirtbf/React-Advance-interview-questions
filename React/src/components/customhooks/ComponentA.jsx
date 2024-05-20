
import useLocalStorage from "../../hooks/UseLocalStorage";

const ComponentA = () => {
  const {val,setValue} = useLocalStorage("count",0)
  return (
    <div>
      <h1>Component A</h1>
      <div className="btnCom">
        <button onClick={() => setValue(val + 1)}>+</button>
        <p>{val}</p>
        <button onClick={() => setValue(val - 1)}>-</button>
      </div>
    </div>
  );
};

export default ComponentA;
