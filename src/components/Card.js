
import React, { useState } from "react";

import "./Card.css";

const Card = () => {
  const [flipped, setFlipped] = useState(false)

  const flip = () => {
      setFlipped(f => !f)
      console.log("flip")
  }

  return (
    <div className="card-outer" onClick={() => {flip()}}>
      <div className={flipped === true ? "card-inner card-flipped" : "card-inner"}>
        <div className="card-front">
            front
        </div>
        <div className="card-back">
            back
        </div>
      </div>
    </div>
  );
};

export default Card;