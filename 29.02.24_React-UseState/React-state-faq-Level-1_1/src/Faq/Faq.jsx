import { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const [showBox, setShowBox] = useState(false);

  return (
    <section>
      <div className="main-box">
        <p>Why is React great?</p>
        <img
          onClick={() => setShowBox((showBox) => !showBox)}
          src="./public/img/pfeil.png"
          alt="Pfeil Icon"
        />
      </div>
      <div className={showBox ? "show-box" : "new-box"}>
        <p>Fast Learning Curve</p>
      </div>
    </section>
  );
};

export default Faq;
