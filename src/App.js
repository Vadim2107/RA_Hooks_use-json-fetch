import './App.css';
import GetData from "./components/GetData";
import React from "react";
import GetError from "./components/GetError";
import GetLoading from "./components/GetLoading";

function App() {
  return (
    <div className="App">
      <GetData/>
      <GetError/>
      <GetLoading/>
    </div>
  );
}

export default App;
