import React from "react";

export const Button = ({ className, name }) => (
  <button className={`px-[31px] py-[10px] font-bold text-lg ${className}`}>{name}</button>
)

