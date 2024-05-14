import { useMemo, useState } from "react";

const UseMemo = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");

  const sumOfNumbers = useMemo(() => {
    console.log("calculating");
    let val = 0;
    for (let i = 1; i <= num; i++) {
      val += i;
    }
    return val;
  },[num]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type Your Name"
      />
      <h3>sum of natural nos - {sumOfNumbers} </h3>

      <input
        type="text"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Type a Number"
      />
      <h3>sum of natural nos - {sumOfNumbers} </h3>
    </div>
  );
};

export default UseMemo;
