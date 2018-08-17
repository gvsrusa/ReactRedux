import React from "react";

const HelloWorld = ({ tech }) => {
  return (
    <div className="hello-world">
      HelloWorld <span className="hello-world__tech">{tech}! </span>
    </div>
  );
};

export default HelloWorld;
