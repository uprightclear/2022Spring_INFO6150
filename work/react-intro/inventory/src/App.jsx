import { useState } from "react";
import Reorder from './Reorder';
import './kebab-case.css';

function App() {
  let [count, setCount] = useState(0);
  const fade = count === 0? "fade-in":"fade-out";
  return (
      count === 0 ?
      <div className={`app ${fade}`}>
        <p>The inventory count: {count}</p>
          <div className="buttons">
            <button onClick = {()=> setCount(count += 1)}>+</button>
            <button onClick ={()=> {setCount(count -= 1)}} disabled={!count}>-</button>
            <Reorder onReorder={setCount}/>
          </div>
      </div>
      :
      <div className={`app ${fade}`}>
        <p>The inventory count: {count}</p>
          <div className="buttons">
            <button onClick = {()=> setCount(count += 1)}>+</button>
            <button onClick ={()=> {setCount(count -= 1)}} disabled={!count}>-</button>
        </div>
      </div>
  );
}

export default App;




