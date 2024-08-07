import React from "react";
import { Link } from "react-router-dom";

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <section>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Terms of Service
          </h1>
          <p className="text-gray-700 mb-6">
            Welcome to RateMyRental. By accessing and using our website, you
            agree to comply with and be bound by the following terms and
            conditions of use, which together with our privacy policy govern
            RateMyRental's relationship with you in relation to this website.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 mb-6">
            By accessing or using RateMyRental, you agree to be bound by these
            Terms of Service and our Privacy Policy. If you do not agree to
            these terms, please do not use our services.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            2. Use of the Site
          </h2>
          <p className="text-gray-700 mb-6">
            You agree to use the site only for lawful purposes. You must not use
            our site to engage in any fraudulent, illegal, or unauthorized
            activities. You also agree not to interfere with or disrupt the site
            or servers or networks connected to the site.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            3. User Accounts
          </h2>
          <p className="text-gray-700 mb-6">
            To access certain features of the site, you may be required to
            create an account. You agree to provide accurate and complete
            information when creating your account and to keep this information
            up to date. You are responsible for maintaining the confidentiality
            of your account and password and for restricting access to your
            account.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            4. User Content
          </h2>
          <p className="text-gray-700 mb-6">
            You retain ownership of any content you submit to RateMyRental, but
            you grant us a worldwide, non-exclusive, royalty-free license to
            use, distribute, reproduce, modify, adapt, and publicly display your
            content. You represent and warrant that you have the right to grant
            this license.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            5. Termination
          </h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to terminate or suspend your account and access
            to the site at our sole discretion, without notice or liability, for
            any reason, including if you violate these terms.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            6. Disclaimers and Limitation of Liability
          </h2>
          <p className="text-gray-700 mb-6">
            RateMyRental is provided "as is" and "as available" without any
            warranties of any kind. We do not guarantee that the site will be
            uninterrupted or error-free. To the fullest extent permitted by law,
            we disclaim all warranties and shall not be liable for any damages
            arising out of or in connection with your use of the site.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            7. Governing Law
          </h2>
          <p className="text-gray-700 mb-6">
            These terms shall be governed by and construed in accordance with
            the laws of Canada. Any disputes arising under or in connection with
            these terms shall be subject to the exclusive jurisdiction of the
            courts of Canada.
          </p>
        </section>
        <section>
          <p className="text-gray-700">
            If you have any questions about these Terms of Service, please{" "}
            <Link to="/contact-us" className="text-blue-500 hover:underline">
              Contact Us
            </Link>
            . We are here to help!
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
