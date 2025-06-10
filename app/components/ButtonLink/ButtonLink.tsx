import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonLinkProps {
  link: string;
  title: string;
  showIn: "mobile" | "desktop" | "both";
}

export default function ButtonLink({ link, title, showIn }: ButtonLinkProps) {
  return (
    <Link
      href={link}
      className={clsx(
        "bg-black text-white rounded-[10px] flex items-center gap-2",
        {
          "block md:hidden w-full justify-center py-[17px] px-8": showIn === "mobile",
          "hidden md:flex w-fit justify-start py-[15px] px-8": showIn === "desktop",
          "block w-full md:w-fit justify-center md:justify-start px-8 py-[17px] md:py-[15px]": showIn === "both",
        }
      )}
    >
      <span className="text-sm md:text-base">{title}</span>
      <img
        src="/assets/icons/right-arrow.png"
        alt="Arrow"
        className="ml-2 w-4 h-4"
      />
    </Link>
  );
}
