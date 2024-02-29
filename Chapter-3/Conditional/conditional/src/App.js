import './App.css';

import Component1 from './Component1';
import Component2 from './Component2';

function App() {
  // const name = "Sakshi";
  // if (name === "Rahul") {
  //   data = <Component1 />
  // }
  // else {
  //   data = <Component2 />
  // }
  const age = 15
  return (
    <div>
      { age >=18 ? <h1> You can vote </h1>: <h1> You cannot vote </h1>}
    </div>
  )
}

export default App;
