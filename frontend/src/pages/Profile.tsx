const Profile = () => {
  {
    /* Have a profile picture Circle, with name and email. */
    /* Use information from Auth0 */
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
          <section className="text-center">
            <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
              profile picture
            </div>
            <h2 className="text-xl font-bold mb-2">UserName</h2>
            <p className="text-gray-700">User Email</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
