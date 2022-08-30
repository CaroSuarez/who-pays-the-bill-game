import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context";

const Stage2 = () => {
  const context = useContext(AppContext);
  const [choosingPlayer, setChoosingPlayer] = useState(true);

  useEffect(() => {
    if (choosingPlayer) {
      setTimeout(() => {
        context.getLooser();
        setChoosingPlayer(false);
      }, 2000);
    }
  }, [choosingPlayer]);

  return (
    <div className="result_wrapper">
      {choosingPlayer ? (
        <p>Choosing Player...</p>
      ) : (
        <p>The looser is {context.looser} </p>
      )}
      <div>
        <button className="action_button" onClick={() => context.startOver()}>
          START OVER
        </button>
        <button
          className="action_button btn_2"
          onClick={() => {
            setChoosingPlayer(true);
          }}
        >
          GET NEW LOOSER
        </button>
      </div>
    </div>
  );
};

export default Stage2;
