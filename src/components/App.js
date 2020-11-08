import React from "react";
import "../styles/App.css";

const App = () => {
  return (
    <>
      <div id="root">
        <h1 data-ns-test="project-name">
          Doctor App
        </h1>
        <p data-ns-test="project-description">
          In this project patient easily get online appointment.
        </p>
      </div>
    </>
  );
};

export default App;
