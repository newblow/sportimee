"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
const Animation = () => {
  // const [textColor, setTextColor,] = useState('red');

  return (
    // style={{
    //   fontSize: '35px',
    //   color: textColor,}}
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Rejoins-nous :)",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        
      ]}
      color="textColor"
      wrapper="span"
      speed={50}
      style={{ display: "inline-block" }}
      className="text-4xl font-bold py-2 font-bungeeRegular"
      repeat={Infinity}
      deletionSpeed={0}
    />
  );
};
export default Animation;
