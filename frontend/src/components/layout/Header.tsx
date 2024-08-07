import homeIcon from "/headerIcon.png";
import profileIcon from "/profileIcon.png";
import saveIcon from "/saveIcon.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-orange-600 text-white h-16">
      <nav>
        <Link to="/">
          <button className="bg-white rounded-full p-2 h-10 w-10 hover:bg-gray-400">
            <img
              src={homeIcon}
              className="object-contain h-full w-full"
              alt="Home Icon"
            />
          </button>
        </Link>
      </nav>

      {/* Messenger Buttons, Profile Buttons */}
      <nav className="flex justify-between space-x-4">
        <Link to="/saved-rentals">
          <button className="bg-white rounded-full p-2 h-10 w-10 hover:bg-gray-400">
            <img
              src={saveIcon}
              className="object-contain h-full w-full"
              alt="Save Icon"
            />
          </button>
        </Link>

        <Link to="/profile">
          <button className="bg-white rounded-full p-2 h-10 w-10 hover:bg-gray-400">
            <img
              src={profileIcon}
              className="object-contain h-full w-full"
              alt="Pro Icon"
            />
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
