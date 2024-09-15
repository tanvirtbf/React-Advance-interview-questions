const container = (
  <div className="container">
    <section>Hello world 1</section>
    <section>Hello world 2</section>
  </div>
);
console.log(container)
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);
