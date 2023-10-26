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
        // "Moi c'est Bollo :)",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Rejoingner nous !",
        1000,
      ]}
      color="textColor"
      wrapper="span"
      speed={50}
      style={{ display: "inline-block" }}
      className="text-xl text-center py-2 font-bungeeRegular"
      repeat={Infinity}
    />
  );
};
export default Animation;
