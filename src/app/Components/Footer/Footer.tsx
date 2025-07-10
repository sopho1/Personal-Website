'use client';

import { useEffect, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer
      className={`bg-[#0a192f] text-[#8892b0] px-4 py-16 overflow-hidden transition-all duration-800 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-wrap gap-8 justify-between items-start">
          {/* Brand Info */}
          <div className="min-w-[250px] flex-1">
            <div className="flex items-center text-[#64ffda] font-semibold text-2xl">
              <img
                src="./images/personal.png"
                alt="Sophonias Logo"
                className="w-[70px] h-[40px] ml-12"
              />
              <span className="ml-[-1.5rem] translate-y-[3px]">ophonias</span>
            </div>
            <p className="mt-2 text-sm text-[#8892b0]">
              Creating digital experiences that matter
            </p>
            <p className="text-sm mt-1 text-[#8892b0]">
              © {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>

          {/* Footer Text + Back to Top */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center text-[#64ffda]">
            <p className="text-base">Made with ❤️ using Next.js</p>
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-2xl rounded-full border-4 border-[#0ae4b1ee] text-[#64ffda] px-4 py-2 bg-transparent shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:scale-110 hover:bg-[#64ffda1a] hover:border-[#64ffda4d] hover:text-[#8892b0] animate-float z-50"
            >
              ↑
            </button>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-8px);
          }
          100% {
            transform: translateX(-50%) translateY(0);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
