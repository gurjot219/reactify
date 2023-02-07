import { useRef } from "react";
function HookUseRef() {
  let inputRef = useRef(null);
  function handleInput() {
    console.warn("Called");
    // add value to input box
    inputRef.current.value = "1000";
    // focus on input box
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    // to hide box
    // inputRef.current.style.display = "none";
  }
  return (
    <div>
      <h1>Hook Use Ref</h1>
      <input type="text" ref={inputRef} />
      <button onClick={() => handleInput()}>Handle Input</button>
    </div>
  );
}
export default HookUseRef;
