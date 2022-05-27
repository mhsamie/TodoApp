import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
const Todo = ({ todos, time, onComplete, onDelete, onEdit }) => {
  const taskTime = () => {
    if (!time) return <p>plz inter the time"</p>;
    return time.map((times) => {
      return <div key={times.id}>{times.text}</div>;
    });
  };
  return (
    <div className="flex flex-wrap">
      <div
        className={
          todos.isCompletes
            ? "line-through decoration-2 decoration-green-500 "
            : "flex justify-between"
        }
      >
        {todos.text}
        {taskTime()}
      </div>
      <div className="flex">
        <button onClick={onComplete}>
          <AiOutlineCheck />
        </button>
        <button onClick={onDelete}>
          <AiOutlineDelete />
        </button>
        <button onClick={onEdit}>
          <AiOutlineEdit />
        </button>
      </div>
    </div>
  );
};

export default Todo;
