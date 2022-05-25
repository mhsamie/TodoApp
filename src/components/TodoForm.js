import React, { useState } from "react";

const TodoForm = (props) => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState();
  const textChangeHandler = (e) => {
    setTask(e.target.value);
  };
  const timeChangeHandler = (e) => {
    setTime(e.target.value);
  };
  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!task && !time) {
      alert("text and time has not been imported");
      return;
    }
    props.addHandler(task);
    setTask("");
    props.addTimeHandler(time);
    setTime("");
  };
  return (
    <form onSubmit={submitFormHandler}>
      <input type="text" value={task} onChange={textChangeHandler} />
      <input type="time" value={time} onChange={timeChangeHandler} />
      <button type="submit">Add Card</button>
    </form>
  );
};

export default TodoForm;
