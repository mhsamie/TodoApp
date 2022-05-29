import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ todo, time, onComplete, onDelete, onUpdate }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isComplets: false });

  const submitEditedTodoHandler = () => {
    onUpdate(edit.id);
  };

  const renderEachTodo = () => {
    if (todo.length === 0) return <p>add sth</p>;

    return todo.map((todos) => {
      return (
        <Todo
          key={todos.id}
          onComplete={() => onComplete(todos.id)}
          onDelete={() => onDelete(todos.id)}
          onEdit={() => setEdit(todos)}
          time={time}
          todos={todos}
        />
      );
    });
  };

  return (
    <div
      className=" p-1 m-1 w-auto
    "
    >
      {edit.id ? (
        <TodoForm addHandler={submitEditedTodoHandler} edit={edit} />
      ) : (
        renderEachTodo()
      )}
    </div>
  );
};

export default TodoList;
