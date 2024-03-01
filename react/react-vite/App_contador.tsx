import { useState } from 'react'
import './App.css';

function App() {
  const [n, setN] = useState(0);

  const handleMinus:any = () => {
    if(n>0){
      setN(n - 1);
    }else{
      return false;
    }
    
  };

  const handleMore:any = () => {
    setN(n + 1);
  };

  return (
    <div className='counter'>
      <div className='contador'>
        <button onClick={handleMinus}>-</button>
        <div className='number'>{n}</div>
        <button onClick={handleMore}>+</button>
      </div>
    </div>
    
  );

}

export default App
