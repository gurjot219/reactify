import { Table } from "react-bootstrap";
function LoopingObject() {
  let students = [
    { name: "Gurjot", email: "g@gmail.com", address: "1234" },
    { name: "Guru", email: "g@gmail.com", address: "1234" },
    { name: "Gagan", email: "g@gmail.com", address: "1234" },
  ];
  return (
    <div>
      <h1>Handle array of objects</h1>
      <Table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
          {students.map((student) =>
            student.name === "Guru" ? (
              <tr key={student.name}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.address}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </Table>
    </div>
  );
}
export default LoopingObject;
