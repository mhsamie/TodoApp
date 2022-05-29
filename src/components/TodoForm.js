import React, { useState } from "react";

const TodoForm = (props) => {
  const [task, setTask] = useState("");

  const textChangeHandler = (e) => {
    setTask(e.target.value);
  };
  // const timeChangeHandler = (e) => {
  //   setTime(e.target.value);
  // };
  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!task) {
      alert("text and time has not been imported");
      return;
    }
    props.addHandler(task);
    setTask("");
    // props.addTimeHandler(time);
    // setTime("");
  };
  return (
    <form onSubmit={submitFormHandler}>
      {props.edit ? (
        <>
          <input
            placeholder="Update your task"
            type="text"
            value={task}
            onChange={textChangeHandler}
            className="rounded-2xl p-2 indent-2 text-white bg-gray-500 placeholder:text-sm placeholder:text-white focus:outline-0"
          />

          <button
            className="bg-yellow-200 p-2 rounded-2xl w-auto"
            type="submit"
          >
            update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add task"
            type="text"
            value={task}
            onChange={textChangeHandler}
            className="rounded-2xl indent-2 p-1.5 w-56 text-white bg-gray-500 placeholder:text-sm placeholder:text-white focus:outline-0"
          />

          <button className="bg-yellow-200 p-1.5 rounded-2xl w-8" type="submit">
            +
          </button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
