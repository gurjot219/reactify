import { useState } from "react";
function UpdateState() {
  let [data, setData] = useState(0);
  let [data2, updateName] = useState("Gurjot");

  function updateData() {
    setData(data + 1);
    updateName("Walia");
  }

  return (
    <div>
      <h1>Update State Component</h1>
      <h1>{data}</h1>
      <h2>{data2}</h2>
      <button onClick={updateData}> Update </button>
    </div>
  );
}
export default UpdateState;
