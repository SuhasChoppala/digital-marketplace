"use client";

import { NAV_PRODUCT_CATEGORIES } from "@/constants/NavItems";
import { useState } from "react";
import { NavItem } from "./NavItem";

export const NavItems = () => {
  const [activeIndex, setActiveItem] = useState<null | number>(null);

  const isAnyOpen = activeIndex !== null;

  return (
    <div className="flex gap-4 h-full">
      {NAV_PRODUCT_CATEGORIES.map((item, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveItem(null);
          } else {
            setActiveItem(i);
          }
        };

        const isOpen = i === activeIndex;

        return (
          <NavItem
            key={i}
            category={item}
            isAnyOpen={isAnyOpen}
            isOpen={isOpen}
            handleOpen={handleOpen}
          />
        );
      })}
    </div>
  );
};
