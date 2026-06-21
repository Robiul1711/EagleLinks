// "use client";
import React from "react";
// import { motion } from "framer-motion";

const BackgroundShapes = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      {/* Light Balls */}
      <div
        className="absolute left-[-490px] top-[-100px] w-[979px] h-[979px] bg-no-repeat"
        style={{ backgroundImage: "url('/images/lightball.png')" }}
      />

      <div
        className="absolute right-[-490px] top-[-10px] w-[979px] h-[979px] bg-no-repeat"
        style={{ backgroundImage: "url('/images/lightball.png')" }}
      />

      <div
        className="absolute left-1/2 top-[-490px] w-[979px] h-[979px] -translate-x-1/2 bg-no-repeat"
        style={{ backgroundImage: "url('/images/lightball.png')" }}
      />

      {/* Side Shapes with motion */}
      <div
        className="absolute right-0 top-20 h-full w-[10%] bg-no-repeat"
        style={{ backgroundImage: "url('/images/right.png')" }}
        // animate={{
        //   y: [0, 25, -25, 0],
        //   x: [0, -8, 8, 0],
        // }}
        // transition={{
        //   duration: 10,
        //   repeat: Infinity,
        //   ease: "easeInOut",
        // }}
      />

      <div
        className="absolute left-0 top-90 h-full w-[10%] bg-no-repeat"
        style={{ backgroundImage: "url('/images/left.png')" }}
        // animate={{
        //   y: [0, -30, 30, 0],
        //   x: [0, 8, -8, 0],
        // }}
        // transition={{
        //   duration: 12,
        //   repeat: Infinity,
        //   ease: "easeInOut",
        // }}
      />
    </div>
  );
};

export default BackgroundShapes;
