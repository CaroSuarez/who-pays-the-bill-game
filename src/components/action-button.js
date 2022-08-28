import React from "react";

const ActionButton = ({ nextStage }) => {
  return (
    <div className="action_button" onClick={() => nextStage()}>
      NEXT
    </div>
  );
};

export default ActionButton;
