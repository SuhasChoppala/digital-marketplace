"use client";

import { NAV_PRODUCT_CATEGORIES } from "@/constants/NavItems";
import { useState, useRef } from "react";
import { NavItem } from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

export const NavItems = () => {
  const [activeIndex, setActiveItem] = useState<null | number>(null);

  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => {
    setActiveItem(null);
  });

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
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
