import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/Todolist";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [todoTime, setTodoTime] = useState([]);
  const addHandler = (input) => {
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompletes: false,
    };
    setTodo([...todo, newTask]);
  };
  const addTimeHandler = (input) => {
    const taskTime = {
      id: Math.floor(Math.random() * 1000),
      text: input,
    };
    console.log(taskTime.text);
    setTodoTime([...todoTime, taskTime]);
  };
  return (
    <div className="bg-gray-400 flex flex-col justify-center items-center">
      <h1>Inter Your Tasks</h1>
      <h2>Not to forget enything</h2>
      <div className="container">
        tasks
        <TodoForm addHandler={addHandler} addTimeHandler={addTimeHandler} />
      </div>
      <TodoList todo={todo} time={todoTime} />
    </div>
  );
};

export default App;
