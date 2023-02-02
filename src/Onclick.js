function Onclick() {
  let data = "Guru";
  function call_me() {
    data = "Walia";
    alert(data);
  }

  return (
    <div>
      <h1>Onclick Event Component</h1>
      <h1>{data}</h1>
      <button onClick={call_me}> Click Me </button>
    </div>
  );
}
export default Onclick;
