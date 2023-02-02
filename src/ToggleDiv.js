import { useState } from "react";
function ToggleDiv() {
  let [state, setState] = useState(true);
  return (
    <div>
      {state ? <h1>You Can't see me..</h1> : null}
      <button onClick={() => setState(false)}>Hide</button>
      <button onClick={() => setState(true)}>Show</button>
    </div>
  );
}
export default ToggleDiv;
