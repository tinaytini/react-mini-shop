
function App() {
  const [productList, setProduct] = React.useState(data)
  const [basketList, setBasketList] = React.useState([])
  const [totalPrice, setTotalPrice] = React.useState(0)


  const addToBasket = (i) => {
    setBasketList([...basketList, productList[i]])
    setTotalPrice(totalPrice + +productList[i].price)
    
  }

  const removeItem = (item, i) => {
    setBasketList(basketList.splice(i, 1))
    setTotalPrice(totalPrice - +item.price)
    setBasketList([...basketList])
  }
  
  
  return (
    <div className="App">
      <div className="product-list">
        {data.map((product, i) => (
          <button onClick={() => addToBasket(i)} key={i} className="product" >
            <div>{product.title}</div>
            <div>{product.price}c</div>
          </button>
        ))}
      </div>
      <div className="basket">
        <div className="total">
          <span>Итого:</span>
          <span>{totalPrice} c</span>
        </div>
        <div>
        {basketList.map((item, i) => (
          <button onClick={() => (removeItem(item, i))} className="product" key={i}>
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
