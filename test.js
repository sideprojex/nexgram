import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "./style.css";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // performing a GET request
    axios
      .get("https://insta.nextacademy.com/api/v1/users")
      .then(result => {
        // If successful, we do stuffs with 'result'
        // puting the results in a state (user)
        console.log(result.data);
        setUsers(result.data);
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log("ERROR: ", error);
      });
  }, []);
  return (
    <div>
      <h1> Home Page</h1>
      <ul>
        {users.map((user, i) => (
          <li className="Username" key={i}>
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
