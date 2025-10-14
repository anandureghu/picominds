import { cn } from "@/lib/utils";
import React from "react";

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={cn(
        props.className,
        "bg-indigo-600/20 rounded-lg outline-none border-[0.3px] border-indigo-400/30 px-5 py-2 w-full placeholder:text-indigo-500 text-indigo-300"
      )}
    />
  );
};

export default Input;
