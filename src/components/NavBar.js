import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "completed" },
  { value: "notcompleted", label: "notcompleted" },
];
const NavBar = ({ uncompleted, onchange, selectedOption }) => {
  return (
    <div>
      {uncompleted ? (
        <p className="text-white">remaining Tasks {uncompleted} </p>
      ) : (
        <p className="text-white">You dont have any tasks todo!</p>
      )}
      <Select
        defaultValue={selectedOption}
        onChange={onchange}
        options={options}
      />
    </div>
  );
};

export default NavBar;
