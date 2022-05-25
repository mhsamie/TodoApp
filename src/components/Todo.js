const Todo = ({ todos, time }) => {
  const taskTime = () => {
    if (!time) return <p>plz inter the time"</p>;
    return time.map((times) => {
      return <span key={todos.id}>{times.text}</span>;
    });
  };
  return (
    <>
      <div>
        {todos.text}
        {taskTime()}
      </div>
      <div>
        <button>+</button>
        <button>-</button>
        <button>done</button>
      </div>
    </>
  );
};

export default Todo;
