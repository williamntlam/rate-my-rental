import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Privacy Policy
        </h1>
        <p className="text-gray-700 mb-6">
          Welcome to RateMyRental. We value your privacy and strive to protect
          your personal information. This Privacy Policy outlines our practices
          regarding the collection, use, and disclosure of your information.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Information We Collect
        </h2>
        <p className="text-gray-700 mb-6">
          We collect information that you provide to us directly, such as when
          you create an account, submit reviews, or contact us for support. This
          information may include your name, email address, and any other
          details you provide.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-6">
          We use the information we collect to provide, maintain, and improve
          our services. This includes personalizing your experience, processing
          transactions, and communicating with you about your account and our
          services.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Sharing Your Information
        </h2>
        <p className="text-gray-700 mb-6">
          We do not share your personal information with third parties except as
          necessary to provide our services, comply with the law, or protect our
          rights. We may share aggregated or anonymized data that does not
          identify you.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Choices</h2>
        <p className="text-gray-700 mb-6">
          You have the right to access, update, and delete your personal
          information. You can do this by logging into your account or
          contacting us directly. You may also opt out of receiving promotional
          communications from us.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Security</h2>
        <p className="text-gray-700 mb-6">
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. However, no security system
          is impenetrable, and we cannot guarantee the security of our systems
          100%.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Changes to This Policy
        </h2>
        <p className="text-gray-700 mb-6">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new policy on our website. You are
          advised to review this policy periodically for any changes.
        </p>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, please{" "}
          <a href="/contact" className="text-blue-500 hover:underline">
            contact us
          </a>
          . We are here to help!
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
