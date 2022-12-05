import React, { useState } from "react";

import "./App.css";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";

function App() {
  const [counter, setCounter] = useState(0);

  const decrementHandler = () => {
    setCounter(counter - 1);
  };

  const incrementHandler = () => {
    setCounter(counter + 1);
  };

  const resetHandler = () => {
    setCounter(0);
  };

  return (
    <div className="container flex-column ">
      <h1>React Counter</h1>
      <div className="container-box">
        <div className="d-flex align-items-center justify-content-center m-5">
          <h1>{counter}</h1>
        </div>
        <div className="d-flex justify-content-around">
          <RemoveCircleOutlineIcon onClick={decrementHandler} />
          <CachedOutlinedIcon onClick={resetHandler} />
          <AddCircleOutlineIcon onClick={incrementHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
