import React from "react";

const gradients = {
  blue: "bg-[linear-gradient(90deg,#018DFF_48%,#0FF_85%)]",
  orange: "bg-[linear-gradient(180deg,#FF8904_0%,#FB64B6_50%,#C27AFF_100%)]",
  instagram: "bg-[linear-gradient(90deg,#F9CE34_0%,#EE2A7B_50%,#6228D7_100%)]",
  purple: "bg-[linear-gradient(90deg,#C27AFF_0%,#FB64B6_50%,#51A2FF_100%)]",
};

const SectionTitle = ({
  title,
  gradientText,
  gradientType = "purple",
  subtitle,
  align = "center", // Options: 'center' | 'start' | 'end'
  className = "",
  subtitleClassName = "",
}) => {
  // Map align prop to flexbox container items alignment
  const containerAlignment = 
    align === "start" ? "items-start" : align === "end" ? "items-end" : "items-center";

  // Map align prop to typography text alignment rules
  const textAlignment = 
    align === "start" ? "text-left" : align === "end" ? "text-right" : "text-center";

  return (
    <div className={`flex flex-col gap-4 ${containerAlignment}`}>
      <h2
        className={`
          text-white font-bold capitalize
         text-[28px]
          sm:text-[32px]
          md:text-[40px]
          lg:text-[44px]
          xl:text-[48px]
          leading-[130%]
          ${textAlignment}
          ${className}
        `}
      >
        {title}{" "}
        <span
          className={`${gradients[gradientType]} bg-clip-text text-transparent`}
        >
          {gradientText}
        </span>
      </h2>

      {subtitle && (
        <p
          className={`
            max-w-[600px]
            text-Secondary
            font-normal
            text-sm
            xs:text-base
            md:text-[17px]
            xl:text-lg
            leading-[180%]
            ${textAlignment}
            ${subtitleClassName}
          `}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;