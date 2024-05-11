import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    const value = event.target.value.trim();
    setEnteredValue(value);
    setIsValid(value.length > 0);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!enteredValue) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue(""); // Clear input after submitting
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? "red" : "black",
            background: !isValid ? "salmon" : "white",
          }}
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit" disabled={!isValid}>
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;

