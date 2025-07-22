import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-700 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Mind Haven</h1>
      <ul className="flex gap-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/meditation">Meditation</Link></li>
        <li><Link to="/journal">Journal</Link></li>
        <li><Link to="/progress">Progress</Link></li>
         <li><Link to="/tasks">Dashboard</Link></li> 
      </ul>
    </nav>
  );
};

export default Navbar;
