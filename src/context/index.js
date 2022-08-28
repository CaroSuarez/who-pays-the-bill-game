import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const AppContext = React.createContext();

const AppProvider = (props) => {
  const [stage, setStage] = useState(1);
  const [playersList, setPlayersList] = useState([]);

  const addPlayer = (name) => {
    const newPlayersList = [...playersList, name];
    setPlayersList(newPlayersList);
  };

  const deletePlayer = (name) => {
    const updatedPlayersList = playersList.filter((item) => item !== name);
    setPlayersList(updatedPlayersList);
  };

  const nextStage = () => {
    if (playersList.length < 2) {
      toast.error("Wow, need more players!");
    } else {
      setStage(2);
    }
  };

  return (
    <>
      <AppContext.Provider
        value={{
          stage,
          setStage,
          playersList,
          addPlayer,
          deletePlayer,
          nextStage,
        }}
      >
        {props.children}
      </AppContext.Provider>
      <ToastContainer position="top-left" autoClose={1000} />
    </>
  );
};

export { AppContext, AppProvider };
