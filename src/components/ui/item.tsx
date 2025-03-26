import React from "react";
import Image from "next/image";
interface ItemProps {
  title?: string;
  subtitle?: string;
  link?: string;
  image?: string;
  user?: boolean;
}

export default function SupHeader({ title, subtitle, link, image , user}: ItemProps) {
  return (
    <div className="flex gap-[24px] items-center">
     {user === false && <div className="w-[64px] h-[64px] rounded-[8px] overflow-hidden">
        <Image
          className="w-full h-full border"
          src={image || "/default-image.png"}
          alt="Header Background"
          width={100}
          height={100}
        />
      </div>}
      
      <div className="flex flex-col">
        {title && <h1 className="text-[#BBBBBB] text-[18px]">{title}</h1>}
        {subtitle && (
          <span className="text-[#999999] text-[14px]">{subtitle}</span>
        )}
        {user === false && link && (
          <a className="text-[#A8C789] text-[14px] mt-1" href={link}>
            {link}
          </a>
        )}
      </div>
    </div>
  );
}
