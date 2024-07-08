import React, { useEffect, useState } from "react";

function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // set up event listeners
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // scroll to top
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10 z-30">
      {isVisible && (
        <button
          onClick={scrollTop}
          className="bg-golden text-darkBrown p-1 md:p-3 rounded-full shadow-2xl hover:bg-yellow-600 transition duration-300 hover:animate-jump"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M11.293 8.707a1 1 0 011.414 0L17 13l1.414-1.414-5-5a1 1 0 00-1.414 0l-5 5L7 13l4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default FloatingButton;
