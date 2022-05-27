import Todo from "./Todo";

const TodoList = ({ todo, time, onComplete, onDelete }) => {
  const renderEachTodo = () => {
    if (todo.length === 0) return <p>add sth</p>;

    return todo.map((todos) => {
      return (
        <Todo
          key={todos.id}
          onComplete={() => onComplete(todos.id)}
          onDelete={() => onDelete(todos.id)}
          time={time}
          todos={todos}
        />
      );
    });
  };

  return (
    <div className="bg-gray-200 rounded-2xl p-1 m-1 w-72 flex justify-between">
      {renderEachTodo()}
    </div>
  );
};

export default TodoList;
