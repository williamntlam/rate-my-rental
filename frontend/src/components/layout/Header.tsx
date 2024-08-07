import homeIcon from "/headerIcon.png";
import messengerIcon from "/messengerIcon.png";
import profileIcon from "/profileIcon.png";
import saveIcon from "/saveIcon.png";

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

      {/* Messenger Buttons, Profile Buttons */}
      <div className="flex justify-between space-x-4">
        <button className="bg-white rounded-full p-2 h-10 w-10 hover:bg-gray-400">
          <img
            src={saveIcon}
            className="object-contain h-full w-full"
            alt="Save Icon"
          />
        </button>
        <button className="bg-white rounded-full p-2 h-10 w-10 hover:bg-gray-400">
          <img
            src={profileIcon}
            className="object-contain h-full w-full"
            alt="Pro Icon"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
