import React from "react";
import ReactDOM from "react-dom";

// Create a new component. This component produces HTML
const App = () => {
  return <div>Hi!</div>;
};

// Take this component's generated HTML and
// render to the DOM
ReactDOM.render(<App />, document.querySelector(".container"));
