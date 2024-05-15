import { useState } from "react";
import ExpensiveComp from "./ExpensiveComp";

const samplePosts = [
  { id: 1, title: "Hello, Iam Tanvir" },
  { id: 2, title: "Hello, I am Sabbir" },
  { id: 3, title: "Hello, I am Rifat" },
  { id: 4, title: "Hello, I am Riduan" },
  { id: 5, title: "Hello, I am Mustak" },
];

const Posts = () => {
  const [posts, setPosts] = useState(samplePosts);
  const addPost = () => {
    setPosts((prevState) => [
      ...prevState,
      { id: Date.now(), title: "A new Title is here" },
    ]);
  };
  return <ExpensiveComp posts={posts} addPost={addPost} />;
};

const Count = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

const UseCallBack = () => {
  return (
    <div>
      <Posts />
      <Count />
    </div>
  );
};

export default UseCallBack;
