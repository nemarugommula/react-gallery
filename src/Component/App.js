import React from "react";
import Header from "./Header/Header";
import SidePanel from "./SidePanel/SidePanel";
import Body from "./Body/Body";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-body">
        <SidePanel />
        <Body />
      </div>
    </div>
  );
}

export default App;
