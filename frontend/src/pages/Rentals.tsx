const Rentals = () => {
  {
    /* Sidebar will be the messenger module with the remaining space on the right being the module where you can browse rentals */
  }
  return (
    <div className="flex flex-1">
      <div className="w-1/3 bg-gray-200 p-6 m-4 shadow-lg rounded-lg">
        Messaging Area
      </div>
      <div className="flex-1 bg-gray-200 p-6 m-4 shadow-lg rounded-lg">
        Rental Area
      </div>
    </div>
  );
};

export default Rentals;
