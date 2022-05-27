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
    <div className="flex justify-between pr-4 pl-4 pt-2 pb-2 bg-gray-300 m-2 rounded-lg  ">
      <div
        className={
          todos.isCompletes
            ? "line-through decoration-2 decoration-green-500 "
            : "flex"
        }
      >
        {todos.text}
        {taskTime()}
      </div>
      <div>
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
