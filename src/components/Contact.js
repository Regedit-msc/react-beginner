// Import dependencies

import React from "react";
import Rainbow from "../hoc/Rainbow";

// Create Contact component
const Contact = () => {
  return (
    <div>
      <div className="container">
        <h4 className="center">Contact</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          repudiandae repellat illo magni eligendi cupiditate voluptates eius
          nam voluptate. Incidunt nihil ullam quae quia officia quaerat,
          deserunt eligendi explicabo totam?
        </p>
      </div>
    </div>
  );
};

// export Contact as wrapped component
export default Rainbow(Contact);
