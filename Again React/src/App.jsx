import "./App.css";

function App() {
  const handleProductClick = () => {
    console.log("Navigating to Product detail page")
  }
  const handleCart = (e) => {
    e.stopPropagation();
    console.log("Item added in cart")
  }
  return (
    <>
      <h2>Event Handling</h2>
      <div onClick={handleProductClick} style={{padding:'20px',border:'1px solid black'}}>
        I am a Product Cart 
        <button onClick={handleCart}>Add to Cart</button>
      </div>
    </>
  );
}

export default App;
