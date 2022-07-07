import React, { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const [task, setTask] = useState(props.edit ? props.edit.text : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
      <input
        placeholder={props.edit ? "update your task" : "add your task"}
        type="text"
        value={task}
        onChange={textChangeHandler}
        ref={inputRef}
        className="rounded-2xl p-2 indent-2 text-white bg-gray-500 placeholder:text-sm placeholder:text-white focus:ring-yellow-300 focus:outline-offset-1"
      />

      <button
        className="bg-yellow-200 p-2 rounded-2xl w-auto m-1"
        type="submit"
      >
        {props.edit ? "update" : "add"}
      </button>
    </form>
  );
};

export default TodoForm;
