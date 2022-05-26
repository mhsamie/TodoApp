import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
const Todo = ({ todos, time, onComplete }) => {
  const taskTime = () => {
    if (!time) return <p>plz inter the time"</p>;
    return time.map((times) => {
      return <div key={times.id}>{times.text}</div>;
    });
  };
  return (
    <div className="flex">
      <div className="flex">
        {todos.text}
        {taskTime()}
      </div>
      <div className="flex">
        <button onClick={onComplete}>
          <AiOutlineCheck />
        </button>
        <button>
          <AiOutlineDelete />
        </button>
        <button>
          <AiOutlineEdit />
        </button>
      </div>
    </div>
  );
};

export default Todo;
