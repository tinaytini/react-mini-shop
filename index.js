
function App() {
  const [basketList, setBasketList] = React.useState([]);
  //const [totalPrice, setTotalPrice] = React.useState(0);


  const addToBasket = (product) => {
    setBasketList([...basketList, product]);
    //setTotalPrice(totalPrice + product.price);
  }

  const removeItem = (item, i) => {
    basketList.splice(i, 1);
    //setTotalPrice(totalPrice - item.price);
    setBasketList([...basketList]);
  }
  
  const getBasketTotal = () => {
    let sum = 0;
    basketList.forEach(item => {
      sum += item.price
    });
    return sum
  }
  
  return (
    <div className="App">
      <div className="product-list">
        {data.map((product, i) => (
          <button onClick={() => addToBasket(product)} key={i} className="product" >
            <div>{product.title}</div>
            <div>{product.price}c</div>
          </button>
        ))}
      </div>
      <div className="basket">
        <div className="total">
          <span>Итого:</span>
          <span>{getBasketTotal()} c</span>
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
