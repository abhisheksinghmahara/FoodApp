import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./Component/Header";
import Body from "./Component/Body";

const Food_app = () => {
  console.log(<Body/>);
  return (
    <div className="food_app" id="food_app">
      <Header />
      <Body/>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Food_app/>);