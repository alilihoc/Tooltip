import React from "react";
import Tooltip from "./Tooltip/Tooltip";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Try hovering elements in page</h1>

      <div className="example-wrapper top-left">
        <Tooltip content="Some Text">
          <label>Label</label>
          <input type="text"/>
        </Tooltip>
      </div>

      <div className="example-wrapper top-right">
        <Tooltip content="Some other text!">
          <p>
            Lorem ipsum dolor sit amet
          </p>
        </Tooltip>
      </div>

      <div className="example-wrapper">
        <Tooltip content={<> <button>Hello</button></> } delay={1000}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam consectetur id incidunt porro quam quis,
            repudiandae saepe sapiente tempore. Atque dolorem eaque fugit ipsa ipsam libero maiores nam repudiandae!
          </p>
        </Tooltip>
      </div>

      <div className="example-wrapper bottom-left">
        <Tooltip content="Some Text">
          <button>Hover me</button>
        </Tooltip>
      </div>

      <div className="example-wrapper bottom-right">
        <Tooltip content="Some Text">
          Bottom Right
        </Tooltip>
      </div>
    </div>
  );
}
