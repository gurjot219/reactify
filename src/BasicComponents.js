import { useState } from "react";
import Users from "./Users";
import Employee from "./Employee";
import Onclick from "./Onclick";
import UpdateState from "./UpdateState";
import Student from "./Student";
import GetInput from "./GetInput";
import ToggleDiv from "./ToggleDiv";
import FormInput from "./FormInput";
function BasicComponents() {
  let [name, setName] = useState("Guru");
  function showAlert() {
    alert("This methd is passed as a prop to student component");
  }
  return (
    <div>
      <h1>Main App Component</h1>
      <hr />
      <Users />
      <hr />
      <Employee />
      <hr />
      <Onclick />
      <hr />
      <UpdateState />
      <hr />
      <Student
        name={name}
        email="gurjotwalia21@gmail.com"
        other={{ address: "abc", zip: 123 }}
        method={showAlert}
      />
      <button
        onClick={() => {
          setName("Walia");
        }}
      >
        Update Name
      </button>
      <hr />
      <GetInput />
      <hr />
      <ToggleDiv />
      <hr />
      <FormInput />
    </div>
  );
}
export default BasicComponents;
