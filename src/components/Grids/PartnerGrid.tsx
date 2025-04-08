import React from 'react';

const PartnerGrid: React.FC = () => {
  return (
    <section className="relative">
      {/* Wave shape background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="block w-full h-auto"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffa31a"
            d="M0,224L48,224C96,224,192,224,288,192C384,160,480,96,576,74.7C672,53,768,75,864,117.3C960,160,1056,224,1152,250.7C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Content Section with Light Orange Background */}
      <div className="relative pt-20 pb-10 bg-[#ffa31a] text-center px-4">
        <h2 className="text-3xl font-bold text-[#1b1b1b] mb-4">
          Let&apos;s do it together
        </h2>
        <div className="mx-auto mt-8 max-w-sm">
          {/* Circular Image */}
          <div className="flex justify-center mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5663/5663360.png"
              alt="Become a rider"
              className="rounded-full w-40 h-40 object-cover"
            />
          </div>
          {/* Title & Description */}
          <h3 className="text-xl font-semibold mb-2 text-[#1b1b1b]">
            Become a rider
          </h3>
          <p className="text-[#292929] mb-4">
            Enjoy flexibility, freedom and competitive earnings by delivering through Glovo.
          </p>
          {/* Button */}
          <a
            href="#"
            className="inline-block px-4 py-2 bg-[#292929] text-white rounded hover:bg-[#1b1b1b] transition"
          >
            Register here
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnerGrid;
