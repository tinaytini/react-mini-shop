console.log(data)

function App() {
  return (
    <div className="App">
      <div className="product-list">
        {data.map(product => (
          <button key={product.id} className="product" >
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
          <button className="product" >
            <div>Название</div>
            <div>Цена c</div>
          </button>
        </div>
      </div>
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
