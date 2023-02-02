import { useState } from "react";

function FormInput() {
  let [name, setName] = useState("");
  let [car, setCar] = useState("");
  let [tna, setTNA] = useState("");
  return (
    <div>
      <h1>Handle Form in React</h1>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <select onChange={(e) => setCar(e.target.value)}>
          <option>Challenger</option>
          <option>Jeep</option>
          <option>Escalade</option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={(e) => setTNA(e.target.checked)} />
        <span>Accept Terms and Conditions</span>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );

  // methods are written below
  function getFormData(e) {
    console.warn(name, car, tna);
    e.preventDefault();
  }
}
export default FormInput;
