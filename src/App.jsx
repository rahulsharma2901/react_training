import React, { useState } from 'react';

const Demo = (props) => {
  return <h1>{props.data}</h1>
};
const Props = () => {
  const [change, setChange] = useState(false);
  return (
    <div>
      <button onClick={() => setChange(!change)}>
        Click Here!
      </button>
      {change ? (
        <Demo data = "HELIKOPTER HELIKOPTER" />
      ) : (
        <Demo data = "Is this the Helicopter?" />
      )}
    </div>
  )
}
export default Props;