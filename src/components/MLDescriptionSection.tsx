import React from "react";

export const MLDescriptionSection: React.FC = () => {
  return (
    <section className="w-full bg-[#131416] py-16 px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-20">
      {/* Left Column - Headline */}
      <div className="w-full lg:w-1/2">
        <h2 className="font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[32px] sm:text-[42px] lg:text-[56px] leading-[1.2] text-white">
          Harness the power of artificial intelligence to revolutionize your operations.
        </h2>
      </div>

      {/* Right Column - Description + Button */}
      <div className="w-full lg:w-[435px] flex flex-col gap-6">
        <p className="font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[18px] sm:text-[20px] leading-[1.3] text-white opacity-80">
         Our AI & ML solutions cover advanced analytics, predictive modeling, natural language processing, computer vision, and intelligent automation.
        </p>

        <button className="flex items-center justify-center gap-2 px-6 py-4 bg-[rgba(25,27,32,0.2)] hover:bg-[rgba(25,27,32,0.35)] transition-colors rounded-lg w-fit">
          <span className="font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[18px] sm:text-[20px] text-white">
            Discover How
          </span>
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1L17 6L12 11M17 6H1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
