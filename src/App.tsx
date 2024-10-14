import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from './main/homePage/Homepage';


function App() {
  return (
    <div className='App'>
      <div className='container mt-3'>
        <h1>Mock Tech 5</h1>
        <Homepage />
      </div>
    </div>
  );
}

export default App;
