import React from 'react';
import munchiLogo from '../../assets/images/munchilogo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#292929] text-white">
      <div className="max-w-7xl mx-auto py-10 px-4">
        {/* Top row: Logo + Language Selector */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Left side: Logo & language dropdown */}
          <div className="flex flex-col gap-4">
            <img
              src={munchiLogo}
              alt="Munchi"
              className="h-22 w-auto object-contain"
            />
            {/* Language selector */}
            <div>
              <select
                className="bg-white text-black px-2 py-1 rounded focus:outline-none"
                aria-label="Language Selector"
              >
                <option>English</option>
                <option>Hungarian</option>
                <option>Slovak</option>
              </select>
            </div>
          </div>

          {/* Middle: Footer links in columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            {/* Column 1 */}
            <div>
              <h3 className="font-bold mb-3">Let's do it together</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://jobs.glovoapp.com" className="hover:underline text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="https://sell.glovoapp.com" className="hover:underline text-white">
                    Glovo for Partners
                  </a>
                </li>
                <li>
                  <a href="https://couriers.glovoapp.com/ro/" className="hover:underline text-white">
                    Couriers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-white">
                    Glovo Business
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-bold mb-3">Links of interest</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://about.glovoapp.com" className="hover:underline text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="https://glovoapp.com/docs/ro/faq" className="hover:underline text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/ro/ro/prime/" className="hover:underline text-white">
                    Glovo Prime
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-white">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-bold mb-3">Follow us</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.facebook.com/glovoappES"
                    className="hover:underline text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/Glovo_ES"
                    className="hover:underline text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/glovo_es/"
                    className="hover:underline text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side: App download buttons & T&C */}
          <div className="flex flex-col items-start space-y-4">
            {/* App Store & Google Play */}
            <div className="flex space-x-3">
              <a
                href="https://app.adjust.com/xle4el?campaign=footer_ro_ro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://glovoapp.com/images/app_store/download-button-new.svg"
                  alt="Download on App Store"
                  className="h-10"
                />
              </a>
              <a
                href="https://app.adjust.com/ule61n?campaign=footer_ro_ro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://glovoapp.com/images/google_play/download-button-new.svg"
                  alt="Download on Google Play"
                  className="h-10"
                />
              </a>
            </div>

            {/* Legal links */}
            <ul className="text-sm space-y-1">
              <li>
                <a
                  href="https://glovoapp.com/docs/ro/legal/terms/"
                  className="hover:underline text-white"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  href="https://glovoapp.com/docs/ro/legal/privacy/"
                  className="hover:underline text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/ro/legal/cookies/"
                  className="hover:underline text-white"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white">
                  Compliance
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
