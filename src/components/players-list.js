import React from "react";

const PlayersList = ({ list, deletePlayer }) => {
  return (
    <>
      <hr />
      <ul className="list-group">
        {list.map((name) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
            key={name}
          >
            <p>{name}</p>
            <span
              className="badge badge-danger"
              onClick={() => deletePlayer(name)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PlayersList;
