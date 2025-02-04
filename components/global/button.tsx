"use client";
import * as React from "react";

type ButtonProps = {
  title: string;
  click: () => void;
};

const Button = ({ title, click }: ButtonProps) => {
  return (
    <button
      className="bg-black px-14 py-3 md:px-20 md:py-6 text-white rounded-2xl text-xl w-full font-primary"
      onClick={click}
    >
      {title}
    </button>
  );
};

export default Button;
