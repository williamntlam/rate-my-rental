import headerIcon from "/headerIcon.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-orange-600 text-white h-16">
      <div>
        <img src={headerIcon} className="p-6 w-24 h-24 object-contain" />
      </div>
      <div>Search Bar Saved Rentals</div>
      <div>Messenger Buttons, Profile Buttons</div>
    </header>
  );
};

export default Header;
