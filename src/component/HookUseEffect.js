import React, { useEffect, useState } from "react";
function HookUseEffect() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    alert("Hello");
  }, [count]);
  return (
    <div>
      <h1>Use Effect Hook {count}</h1>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}
export default HookUseEffect;
