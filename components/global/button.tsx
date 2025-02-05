"use client";
import * as React from "react";

type ButtonProps = {
  title: string;
  click: () => void;
};

const Button = ({ title, click }: ButtonProps) => {
  return (
    <button
      className="bg-black md:px-14 sm:px-12 py-3 md:py-6 text-white rounded-2xl text-base md:text-xl w-full font-primary"
      onClick={click}
    >
      {title}
    </button>
  );
};

export default Button;
