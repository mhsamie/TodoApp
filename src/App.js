import React, { useState, useEffect } from "react";

import TodoList from "./components/Todolist";
import TodoForm from "./components/TodoForm";
import NavBar from "./components/NavBar";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");
  const [filteredTodos, setFilterTodos] = useState([]);
  useEffect(() => {
    filterTodo(selectedOption);
  }, [todo, selectedOption]);
  const addHandler = (input) => {
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompletes: false,
    };
    setTodo([...todo, newTask]);
  };

  const completeTodo = (id) => {
    const index = todo.findIndex((todos) => todos.id === id);
    const selectedTodo = { ...todo[index] };
    selectedTodo.isCompletes = !selectedTodo.isCompletes;
    const updatedTodo = [...todo];
    updatedTodo[index] = selectedTodo;
    setTodo(updatedTodo);
  };
  const deletTodo = (id) => {
    const filteredTodo = todo.filter((t) => t.id !== id);
    setTodo(filteredTodo);
  };
  const editTodo = (id, newValue) => {
    const index = todo.findIndex((todos) => todos.id === id);
    const selectedTodo = { ...todo[index] };
    selectedTodo.text = newValue;
    const updatedTodo = [...todo];
    updatedTodo[index] = selectedTodo;
    setTodo(updatedTodo);
  };
  const filterTodo = (selectedOption) => {
    switch (selectedOption) {
      case "Completed":
        setFilterTodos(todo.filter((t) => t.isCompletes));
        break;
      case "notcompleted":
        setFilterTodos(todo.filter((t) => !t.isCompletes));
        break;
      default:
        setFilterTodos(todo);
    }
  };
  const selectChangeHandler = (e) => {
    setSelectedOption(e.value);
    filterTodo(e.value);
  };
  return (
    <div className="bg-gray-800 w-full min-h-screen max-h-full flex flex-col justify-start items-center">
      <h1 className="font-bold text-white text-lg mt-4">Inter Your Tasks</h1>
      <h2 className="text-sm text-white mb-2">Not to forget anything</h2>
      <NavBar
        uncompleted={todo.filter((todos) => todos.isCompletes === false).length}
        onchange={selectChangeHandler}
        selectedOption={selectedOption}
      />
      <div className="m-4 flex flex-col justify-center items-center">
        <TodoForm addHandler={addHandler} />
      </div>
      <TodoList
        todo={filteredTodos}
        onDelete={deletTodo}
        onComplete={completeTodo}
        onUpdate={editTodo}
      />
    </div>
  );
};

export default App;
