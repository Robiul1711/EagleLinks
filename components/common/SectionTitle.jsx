import React from "react";

const SectionTitle = ({
  title,
  gradientText,
  subtitle,
  className = "",
  gradientClassName = "",
  subtitleClassName = "",
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2
        className={`text-center text-white text-3xl md:text-[48px] font-semibold leading-tight md:leading-[88px] ${className}`}
      >
        {title}{" "}
        <span
          className={`bg-[linear-gradient(90deg,#C27AFF_0%,#FB64B6_50%,#51A2FF_100%)] bg-clip-text text-transparent font-bold leading-[60px] ${gradientClassName}`}
        >
          {gradientText}
        </span>
      </h2>

      {subtitle && (
        <p
          className={`max-w-[600px] text-center text-[#99A1AF] text-base font-normal leading-[30px] ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;