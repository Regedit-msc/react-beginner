/* Import React  */
import React from "react";

// Create the Rainbow component
const Rainbow = (WrappedComponent) => {
  const colors = ["blue", "green", "yellow", "orange", "pink", "red"];
  const randomColor = colors[Math.floor(Math.random() * colors.length - 1)];
  const className = randomColor + "-text";
  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

// Export the rainbow component
export default Rainbow;
