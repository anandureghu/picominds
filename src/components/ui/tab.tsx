"use client";
import { cn } from "@/lib/utils";
import React, { useCallback, useState } from "react";

export interface TabItem {
  label?: string;
  value: string;
}

const Tab = ({
  items,
  onChange,
}: {
  items: TabItem[];
  onChange?: (value: string | null) => void;
}) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = useCallback((value: string) => {
    setSelected((prev) => {
      const newValue = prev == value ? null : value;
      if (onChange) onChange(newValue);
      return newValue;
    });
  }, []);

  return (
    <ul className="list-none m-0 p-0 flex items-center gap-3">
      {items.map((item) => {
        return (
          <li
            key={item.label ?? item.value}
            onClick={(e) => {
              e.stopPropagation();
              handleClick(item.value);
            }}
            className={cn(
              "bg-indigo-600/20 rounded-lg outline-none border-[0.3px] border-indigo-400/30 px-5 py-2 text-indigo-400 cursor-pointer hover:scale-105 transition-all duration-100 ease-in",
              selected == item.value && "border-2"
            )}
          >
            {item.label ?? item.value}
          </li>
        );
      })}
    </ul>
  );
};

export default Tab;
