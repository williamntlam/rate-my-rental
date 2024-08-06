import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-600 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <p>© 2024 William Lam. All rights reserved.</p>
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <ul className="flex space-x-4">
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
