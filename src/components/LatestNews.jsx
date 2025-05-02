import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex gap-5 items-center p-3 bg-base-200">
      <p className="py-2 px-3 bg-secondary text-base-100">Latest</p>
      <Marquee className="flex gap-5 " pauseOnHover="true" speed="60">
        <p className="font-bold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
          placeat.
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
          placeat.
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
          placeat.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
