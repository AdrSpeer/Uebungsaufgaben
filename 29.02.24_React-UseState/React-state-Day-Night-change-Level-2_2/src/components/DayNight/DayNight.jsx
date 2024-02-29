import { useState } from "react";
import "./DayNight.css";

const DayNight = () => {
  const [dayNight, setDayNight] = useState(false);
  console.log(dayNight);
  const [changeButton, setChangeButton] = useState("Change to night");
  const [headline, setHeadline] = useState("Day");

  const onChange = () => {
    setDayNight((dayNight) => !dayNight);
    if (dayNight === true) {
      setChangeButton("Change to night");
      setHeadline("Day");
    } else {
      setChangeButton("Change to day");
      setHeadline("Night");
    }
  };

  return (
    <div className={dayNight ? "dark" : ""}>
      <h1>{headline}</h1>
      <button onClick={onChange}>{changeButton}</button>
    </div>
  );
};

export default DayNight;
