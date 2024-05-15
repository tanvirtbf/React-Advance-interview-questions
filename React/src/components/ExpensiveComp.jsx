const ExpensiveComp = ({ posts, addPost }) => {
  console.log("Expensive component rendered");
  return (
    <div>
      {posts.map((item) => {
        console.log("rendering item ", item.id);
        return <h4 key={item.id}>{item.title}</h4>;
      })}
      <button onClick={addPost}>ADD Post</button>
    </div>
  );
};

export default ExpensiveComp;
