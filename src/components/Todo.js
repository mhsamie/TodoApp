import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

const Todo = ({ todos, time, onComplete, onDelete, onEdit }) => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="flex justify-between pr-4 pl-4 pt-2 pb-2 bg-gray-300 m-2 rounded-lg  ">
      <div
        className={
          todos.isCompletes
            ? "line-through decoration-2 decoration-green-500 "
            : "flex"
        }
      >
        <span className="border-2 p-1 break-all w-36 border-solid border-gray-600">
          {todos.text}
        </span>
        <DateTimePicker
          onChange={onChange}
          value={value}
          className=" border-none text-sm"
        />
      </div>
      <div className="p-1 mt-1 w-1">
        <button onClick={onComplete}>
          <AiOutlineCheck className="" />
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
