import logo from './logo.svg';
import './App.css';

import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from './actions';


function App() {

  const mydata = useSelector((state)=>state.myReducer )
  const dispatch= useDispatch();
  // Separate reducer

  console.log(mydata)
  return (
    <div className="App">
      <div className="title">Increment/Decrement counter</div>

      <br/>
      <div className="subtitle">Using React and Redux</div>

      <div className="counter-container">
        <button onClick={() => dispatch(decrement())}>-</button>
        <span className="counter">{mydata}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
}

export default App;
