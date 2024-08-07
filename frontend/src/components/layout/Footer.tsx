import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-600 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <p>© 2024 William Lam. All rights reserved.</p>
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/about-us" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:underline">
                    Private Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
