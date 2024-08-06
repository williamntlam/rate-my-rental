import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          About RateMyRental
        </h1>
        <p className="text-gray-700 mb-6">
          Welcome to RateMyRental, your trusted platform for honest and reliable
          rental reviews. Our mission is to provide renters with the information
          they need to make informed decisions about their next home. We believe
          in transparency and aim to create a community where renters can share
          their experiences and help others.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          At RateMyRental, our mission is to empower renters with the knowledge
          and tools they need to find the perfect rental property. We understand
          the challenges that come with finding a new home, and we strive to
          make the process easier by providing detailed and unbiased reviews
          from real renters.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Team</h2>
        <p className="text-gray-700 mb-6">
          Our team is made up of dedicated professionals who are passionate
          about improving the rental experience for everyone. From our
          developers to our customer support team, we are committed to providing
          the best possible service and support to our users.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Join Our Community
        </h2>
        <p className="text-gray-700 mb-6">
          Join the RateMyRental community today and start sharing your rental
          experiences. Whether you are a current renter looking to leave a
          review, or someone searching for their next home, we welcome you to be
          a part of our growing community.
        </p>
        <p className="text-gray-700">
          For more information, feel free to{" "}
          <a href="/contact" className="text-blue-500 hover:underline">
            contact us
          </a>
          . We are here to help!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
