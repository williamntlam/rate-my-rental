import homeIcon from "/headerIcon.png";
import messengerIcon from "/messengerIcon.png";
import profileIcon from "/profileIcon.png";
import SearchBar from "../common/SearchBar";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-orange-600 text-white h-16">
      <div>
        <button className="bg-white rounded-full p-2 h-10 w-10 hover:bg-gray-400">
          <img
            src={homeIcon}
            className="object-contain h-full w-full"
            alt="Home Icon"
          />
        </button>
      </div>
      <div>
        <SearchBar />
      </div>
      {/* Messenger Buttons, Profile Buttons */}
      <div className="flex justify-between space-x-4">
        <button className="bg-white rounded-full p-2 h-10 w-10 hover:bg-gray-400">
          <img
            src={messengerIcon}
            className="object-contain h-full w-full"
            alt="Messenger Icon"
          />
        </button>
        <button className="bg-white rounded-full p-2 h-10 w-10 hover:bg-gray-400">
          <img
            src={profileIcon}
            className="object-contain h-full w-full"
            alt="Messenger Icon"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
