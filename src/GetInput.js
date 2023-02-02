import { useState } from "react";
function GetInput() {
  let [name, setName] = useState(null);
  let [print, setPrint] = useState(false);

  function getVal(val) {
    console.log(val.target.value);
    setName(val.target.value);
    setPrint(false);
  }
  return (
    <div>
      <h1>Get Input from Input box and print It</h1>
      {print ? <h2>{name}</h2> : null}
      <input type="text" onChange={getVal} />
      <button onClick={() => setPrint(true)}>Print Name</button>
    </div>
  );
}
export default GetInput;
