import Todo from "./Todo";

const TodoList = ({ todo, time }) => {
  const renderEachTodo = () => {
    if (todo.length === 0) return <p>add sth</p>;

    return todo.map((todos) => {
      return <Todo key={todos.id} time={time} todos={todos} />;
    });
  };

  return <div>{renderEachTodo()}</div>;
};

export default TodoList;
