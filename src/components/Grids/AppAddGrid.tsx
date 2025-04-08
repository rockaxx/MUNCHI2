import React from 'react';

const AppAddGrid: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Text + Buttons */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Download the app</h2>
          <p className="text-gray-600 mb-6">
            Order anything and track it in real time with the Glovo app.
          </p>
          <div className="flex space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://glovoapp.com/images/app_store/download-button-new.svg"
                alt="Download on the App Store"
                className="h-12"
              />
            </a>
            <a
              href="https://app.adjust.com/ule61n?campaign=footer_ro_ro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Download on Google Play"
                className="h-12"
              />
            </a>
          </div>
        </div>

        {/* Right Column: Phone Mockups */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://kmphitech.com/wp-content/uploads/2021/04/Food-Ordering-Application.png"
            alt="App Mockups"
            className="max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AppAddGrid;
