import ReactDOM from 'react-dom/client'

function Card(key,image,title,brand,price){
  return (
    <div className="card" key={key}>
    <img src={image} alt="iphone" />
    <div className="card-content">
      <h3>{title}</h3>
      <p>hii</p>
      <p>{brand}</p>
      <p>
        <b>${price}</b>
      </p>
    </div>
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

fetch('https://dummyjson.com/products')
  .then((res)=> res.json())
  .then((data)=> {
    console.log(data.products[0])
    root.render(
      <div className="container">
        {data.products.map((item)=>{
          return Card(item.id,item.images[0],item.title, item.brand, item.price)
        })}
      </div>
    )
  })




