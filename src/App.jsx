import { useEffect, useState } from "react";
import UsersList from "./components/UsersList";
import "./App.css";


function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((responce) => responce.json())
      .then((json) => setUsers(json));
  }, []);

  return <div>
    <input/>
    <UsersList users = {users}/>
  </div>;
}

export default App;


