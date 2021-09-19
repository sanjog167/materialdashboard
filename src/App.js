import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import MainSidebar from "./MainSidebar";
import Body from "./Body";

function App() {
  return (
    <div className="app_body">
      <MainSidebar />
      <Body />
    </div>
  );
}

export default App;
