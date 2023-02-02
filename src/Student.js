// get props from components
function Student(props) {
  console.log(props);
  return (
    <div>
      <h1>Student Component, Props and Update Props</h1>
      <h1>Hello {props.name}</h1>
      <h2>{props.email}</h2>
      <h4>{props.other.address}</h4>
      <button onClick={props.method}>Alert, Prop passed as method</button>
    </div>
  );
}
export default Student;
