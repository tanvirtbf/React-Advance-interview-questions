import { useEffect, useMemo, useState } from "react";

const UseMemo2 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [status, setStatus] = useState("");

  const userInfo = {
    name: name,
    isSad: status === "Completed" ? true : false,
  }

  useEffect(() => {
    console.log("userInfo changed ", userInfo);
  }, [userInfo.name, userInfo.isSad]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your Name"
      />
      <input
        value={age}
        type="text"
        onChange={(e) => setAge(e.target.value)}
        placeholder="Ener your Age"
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="todo">To Do</option>
        <option value="ong">OnGoing</option>
        <option value="com">Completed</option>
      </select>
    </div>
  );
};

export default UseMemo2;
