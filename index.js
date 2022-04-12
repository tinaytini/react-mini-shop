console.log(data)


function App() {
  const [productList, setProduct] = React.useState(data)
  const [basketList, setBasketList] = React.useState([])

  const addToBasket = (i) => {
    setBasketList([...basketList, productList[i]])
  }


  return (
    <div className="App">
      <div className="product-list">
        {data.map((product, i) => (
          <button onClick={() => addToBasket(i)} key={product.id} className="product" >
            <div>{product.title}</div>
            <div>{product.price}c</div>
          </button>
        ))}
      </div>
      <div className="basket">
        <div className="total">
          <span>Итого:</span>
          <span>0 c</span>
        </div>
        <div>
        {basketList.map(item => (
          <button className="product" >
            <div>{item.title}</div>
            <div>{item.price}c</div>
          </button>
        ))}
        </div>
      </div>
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
