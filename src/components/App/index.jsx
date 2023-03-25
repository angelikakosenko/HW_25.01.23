import { useState } from "react";
import ProductsInBox from "../ProductsInBox";
import Summ from "../Summ";
function App() {

  const products = [
    {id: 1, title: 'velocycle', price: 50000, count: 2},
    {id: 2, title: 'scateboard', price: 25000, count: 5},
    {id: 3, title: 'rollers', price: 20000, count: 1},
    {id: 4, title: 'snowboard', price: 30000, count: 4},
    {id: 5, title: 'scooter', price: 80000, count: 3},
    {id: 6, title: 'monocircle', price: 40000, count: 2},
  ]

  const addingCount = idAd => {
    const target = box.find(({id}) => id === idAd );
    target.count++;
    setBox([...box]);
  }

  const killCount = idDec => {
    const target = box.find(({id}) => id === idDec );
    target.count--;

    if (target.count === 0){
      setBox(box.filter(e => e !== target));  
    } else {setBox([...box]);}

    
  }

  

  const [box, setBox] = useState(products);
  return (
    <div>
      <div>
      {
        box.map(item => <ProductsInBox 
          addingCount = {addingCount}
          killCount = {killCount} 
          key={item.id} {...item}
          />)
      }
      </div>
      <Summ box={box}/>
    </div>
  );
}

export default App;
