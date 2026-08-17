import React from "react";

/**
 * RedString Component
 * Crime investigation board red string connector between evidence nodes
 */
const RedString = ({
  className = "",
  direction = "horizontal",
  dashed = false,
}) => {
  return (
    <div
      className={`pointer-events-none select-none flex items-center justify-center ${
        direction === "vertical" ? "w-[2px] h-16 my-2 mx-auto" : "h-[2px] w-full my-4"
      } ${className}`}
    >
      <div
        className={`${
          direction === "vertical" ? "w-[2px] h-full" : "h-[2px] w-full"
        } ${
          dashed
            ? "border-case-redBright border-dashed " + (direction === "vertical" ? "border-l-2" : "border-t-2")
            : "bg-gradient-to-r from-case-redDark via-case-redBright to-case-redDark shadow-[0_0_8px_rgba(239,68,68,0.5)]"
        }`}
      />
    </div>
  );
};

export default RedString;
