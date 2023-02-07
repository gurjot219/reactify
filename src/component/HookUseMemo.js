import { useState, useMemo } from "react";
function HookUseMemo() {
  let [count, setCount] = useState(1);
  let [multi, setMulti] = useState(2);
  let multiCountMemo = useMemo(
    function multiCount() {
      console.warn(
        "It will only get called if count is updated, we need to teel this hook at the end of the hook"
      );
      return count * 5;
    },
    [count]
  );
  return (
    <div>
      <h1>Use Memo Hook</h1>
      <h2>Count{count}</h2>
      <h2>Multi{multi}</h2>
      <h2>{multiCountMemo}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setMulti(multi * 2)}>* by 2</button>
    </div>
  );
}
export default HookUseMemo;
