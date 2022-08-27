import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = (props) => {
  const [stage, setStage] = useState(1);
  const [playersList, setPlayersList] = useState([]);

  return (
    <AppContext.Provider
      value={{ stage, setStage, playersList, addPlayer: setPlayersList }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
