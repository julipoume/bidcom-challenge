"use client";

import React from "react";
import { DescriptionInfo } from "@/app/lib/definitions";

interface SideDescriptionProps {
  data: DescriptionInfo;
}

export default function SideDescription({ data }: SideDescriptionProps) {
  const { headline, title, description } = data;

  return (
    <aside className="flex flex-col items-center sm:items-start">
      {headline && (
        <h2 className="font-inter font-normal text-[12px] leading-[18px] sm:text-[14px] sm:leading-[20px] text-black px-[2px] py-[2px] tracking-[3px]">
          {headline}
        </h2>
      )}
      {title && (
        <h1
          className="font-inter font-normal text-[30px] leading-[36px] text-center tracking-normal sm:text-[48px] sm:leading-[48px] sm:text-left sm:tracking-[0%] text-black mb-4"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      {description && (
        <p className="font-light text-[16px] leading-[24px] text-[#150142] mb-0 sm:mb-6 max-w-[547px] text-center sm:text-left">
          {description}
        </p>
      )}
    </aside>
  );
}
