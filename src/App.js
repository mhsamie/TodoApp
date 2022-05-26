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

    setTodoTime([...todoTime, taskTime]);
  };
  const completeTodo = (id) => {
    console.log(id);
  };
  return (
    <div className="bg-gray-800 w-full h-screen flex flex-col justify-start items-center">
      <h1 className="font-bold text-white text-lg mt-4">Inter Your Tasks</h1>
      <h2 className="text-sm text-white mb-2">Not to forget anything</h2>
      <div className="m-4 flex flex-col justify-center items-center">
        <TodoForm addHandler={addHandler} addTimeHandler={addTimeHandler} />
      </div>
      <TodoList todo={todo} time={todoTime} onComplete={completeTodo} />
    </div>
  );
};

export default App;
