import React from "react";

const Icons = ({ icon, className }) => {
  const iconList = {
    facebookIcon: (
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_616_73)">
          <path
            d="M9.49636 17V9.25811H12.458L12.8982 6.22692H9.49636V4.29617C9.49636 3.42148 9.77271 2.8226 11.1962 2.8226H13V0.120123C12.1224 0.0371794 11.2402 -0.00286969 10.3575 0.000159793C7.73972 0.000159793 5.94237 1.40949 5.94237 3.99673V6.22125H3V9.25245H5.9488V17H9.49636Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_616_73">
            <rect width="16" height="17" fill="currentColor" />
          </clipPath>
        </defs>
      </svg>
    ),
    circle:(
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 21C16.299 21 21 16.299 21 10.5C21 4.70101 16.299 0 10.5 0C4.70101 0 0 4.70101 0 10.5C0 16.299 4.70101 21 10.5 21Z" fill="#FEFEFE"/>
</svg>
    )

  };

  const addClassName = (iconElement) => {
    return React.cloneElement(iconElement, {
      className: `${className || ""} custom-class`,
    //   ...rest, // spread extra props here so they also apply to the icon
    });
  };

  const iconsNew = Object.fromEntries(
    Object.entries(iconList).map(([key, iconElement]) => [
      key,
      addClassName(iconElement),
    ]),
  );

  return iconsNew[icon] || null;
};

export default Icons; 
      
