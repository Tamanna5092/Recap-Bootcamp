import React, { useState } from "react";

export default function Rendering() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {show ? "Hide Message" : "Show Message"}
      </button>
      {show && <h1>Hello React Learner</h1>}
    </div>
  );
}
