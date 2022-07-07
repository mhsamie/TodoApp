const NavBar = ({ uncompleted }) => {
  return (
    <div>
      {uncompleted ? (
        <p className="text-white">remaining Tasks {uncompleted} </p>
      ) : (
        <p className="text-white">You dont have any tasks todo!</p>
      )}
    </div>
  );
};

export default NavBar;
