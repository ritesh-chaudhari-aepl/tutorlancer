/* eslint-disable react/prop-types */
import React from "react";

const CustomCard = ({ icon, bgColor, badgeCount, iconColor, title }) => {
  return (
    <div className={`card shadow-sm bg-white rounded-md w-[180px] h-[160px] items-center justify-center`}>
      {icon && (
        <div className={`h-10 mb-3 w-10 rounded-full ${bgColor} flex items-center justify-center relative`}>
          {React.cloneElement(icon, { color: iconColor })}
          {badgeCount && (
            <div className="bg-yellow-light w-4 h-4 flex items-center justify-center absolute -top-0 left-[30px] rounded-full">
              <span className="text-[10px] text-white">{badgeCount}</span>
            </div>
          )}
        </div>
      )}
      <p className="font-bold text-sm text-center px-3">{title}</p>
    </div>
  );
};

export default CustomCard;
