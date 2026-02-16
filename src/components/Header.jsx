import React from "react";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <div className="flex items-center justify-between px-6 py-2">
        
        {/* Logo SVG lebih pipih */}
        <div className="flex items-center justify-center h-12 w-20 text-primary">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Roof/Triangle */}
            <path
              d="M4 14L18 4L32 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
           {/* Left pillar */}
<line x1="10" y1="16" x2="10" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>

{/* Center pillar */}
<line x1="18" y1="12" x2="18" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>

{/* Right pillar */}
<line x1="26" y1="16" x2="26" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>

          </svg>
        </div>
        
        {/* Title */}
        <div className="flex flex-col items-center justify-center flex-10 w-8">
          <h1 className="text-xl font-semibold tracking-[0.18em] text-primary uppercase leading-tight">
            ARJUNA FURNITURE
          </h1>
          <p className="text-[10px] tracking-[0.15em] text-primary/60 text-primary uppercase leading-tight">
            Elegant Home Living
          </p>
        </div>
        
        {/* Cart Button */}
        <div className="flex items-center gap-4">
          <button className="text-[#1b130e] dark:text-[#fbfaf8]">
            <span className="material-symbols-outlined text-xl">
              shopping_bag
            </span>
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;
