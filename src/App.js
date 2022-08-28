import React, { useContext } from "react";
import Stage1 from "./components/stage-1";
import Stage2 from "./components/stage-2";
import { AppContext } from "./context";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style/App.css";

const App = () => {
  const context = useContext(AppContext);
  return (
    <div className="wrapper">
      <div className="center-wrapper">
        <h1>Who pays the bill?</h1>
        {context.stage === 1 && <Stage1 />}
        {context.stage === 2 && <Stage2 />}
      </div>
    </div>
  );
};

export default App;
