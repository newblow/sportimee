"use client";
import ScrollToTop from "react-scroll-to-top";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ReturnToTop = () => {
  return (
    <ScrollToTop
      color=""
      smooth
      component={
        <div className="w-full rounded-full h-full flex justify-center items-center">
          <BsFillArrowUpCircleFill size={30} className="" />
        </div>
      }
    />
  );
};

export default ReturnToTop;
