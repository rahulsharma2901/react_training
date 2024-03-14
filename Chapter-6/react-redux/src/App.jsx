import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './actions/indexAct';

function App() {
  const myState = useSelector( (state) => state.inc_dec)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Welcome to Redux</h1>
      <input type="text" value={myState}/>
      <br />
      <button onClick={() => dispatch(increase())} className='btn btn-primary'>Add 1</button>
      <button onClick={() => dispatch(decrease())} className='btn btn-danger'>Remove 1</button>
    </div>
  );
}

export default App;