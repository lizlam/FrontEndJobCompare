import React from "react";
import ReactDOM from "react-dom";
import { Bar } from "react-roughviz";

import "./styles.css";

let obj = { method: "Get", mode: "no-cors" };
let url =
  "https://jobs.github.com/positions.json?utf8=%E2%9C%93&description=react";
const reactData = fetch(url, obj)
  .then(data => data.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));

function App() {
  return (
    <div className="App">
      <h1>Number of React, Vue and Angular Jobs</h1>
      <h2>Listed on GitHub Jobs</h2>
      <Bar
        data={{
          labels: ["React", "Vue", "Angular"],
          values: [80, 24, 35]
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
