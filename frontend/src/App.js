import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const response = await axios.get("/names");
    setUserName(response.data);
  };

  return (
    <>
      <h1>my website</h1>
      <h3>my name is {userName}</h3>
    </>
  );
}

export default App;
