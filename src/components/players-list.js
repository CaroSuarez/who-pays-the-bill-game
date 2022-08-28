import React from "react";

const PlayersList = ({ list, deletePlayer }) => {
  return (
    <>
      <hr />
      <ul className="players_wrapper list-group">
        {list.map((name) => (
          <li
            className="list-group-item d-flex justify-content-between"
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
