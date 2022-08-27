import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { AppContext } from "../context";

const Stage1 = () => {
  const textInput = useRef();
  const context = useContext(AppContext);
  const [inputError, setInputError] = useState({
    error: false,
    message: "",
  });

  const isValidInput = (inputText) => {
    if (inputText === "") {
      setInputError({
        error: true,
        message: "Sorry, you need to add something",
      });
      return false;
    }

    if (inputText.length < 3) {
      setInputError({
        error: true,
        message: "Name must have 3 letters at least",
      });
      return false;
    }

    return true;
  };
  const handleSumit = (event) => {
    event.preventDefault();
    const currentInput = textInput.current.value;
    const valid = isValidInput(currentInput);

    if (valid) {
      setInputError({
        error: false,
        message: "",
      });

      const currentPlayersList = context.playersList;
      const newPlayersList = [...currentPlayersList, currentInput];
      context.addPlayer(newPlayersList);
    }

    textInput.current.value = "";
  };

  useEffect(() => {
    console.log(context.playersList);
  });

  return (
    <Form onSubmit={handleSumit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Add player name"
          name="player_name"
          ref={textInput}
        />
      </Form.Group>
      {inputError.error && <Alert> {inputError.message} </Alert>}
      <Button className="miami" variant="primary" type="submit">
        Add player
      </Button>
    </Form>
  );
};

export default Stage1;
