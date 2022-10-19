import { useState, useEffect } from "react";
import Card from "../../components/Card";
import "./styles.scss";

const Home = () => {
  const [studantName, setStudantName] = useState("");
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: "", avatar: "" });

  function handleAddStudent() {
    const newStudent = {
      name: studantName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    setStudents((prevStudent) => [...prevStudent, newStudent]);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/kellycesario");
      const data = await response.json();
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Attendance List</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="" />
        </div>
      </header>
      <input
        type="text"
        aria-label="name"
        placeholder="Enter name..."
        onChange={(e) => setStudantName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Add
      </button>

      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
};

export default Home;
