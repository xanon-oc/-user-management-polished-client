import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-cyan-400 p-4">
      <h2 className="text-center font-bold text-white">
        <Link to="/">User Management System</Link>
      </h2>
    </div>
  );
};

export default Header;
