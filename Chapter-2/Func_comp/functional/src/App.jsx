import { add, subtract, multiply, divide } from "./Display.jsx";

const result1 = add(3, 4);
const result2 = multiply(6, 8);
const result3 = divide(18, 3);
const result4 = subtract(50, 20);

function App() {
  return (
      <div>
        <h1>Results are in as:</h1>
        <h3>Addition result is: {result1}</h3>
        <h3>Multiplication result is: {result2}</h3>
        <h3>Divsion result is: {result3}</h3>
        <h3>Subtraction result is: {result4}</h3>
      </div>
  )
}
export default App;