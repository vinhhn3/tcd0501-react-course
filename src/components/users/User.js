import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function User() {
  const { login } = useParams();
  const [user, setUser] = useState({});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://api.github.com/users/${login}`);
      setUser(response.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>User Login: {user.login}</h1>
      <h2>Name: {user.name}</h2>
    </div>
  );
}

export default User;
