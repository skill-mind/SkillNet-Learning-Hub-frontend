import React from "react";
import { Pencil } from "lucide-react";
import SupHeader from "./ui/item";

interface DetailsProps {
  topic?: string;
  user?: boolean;
  title?: string;
  description?: string;
  date?: string;
  subtitle?: string;
  image?: string;
  onClick?: () => void;
  link?: string;
  activeSection?: boolean;
}

export default function Details({
  activeSection,
  user,
  title,
  description,
  date,
  subtitle,
  image,
  link,
}: DetailsProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full gap-[16px]">
        {(title || subtitle || date) && (
          <div
            className={`flex justify-between w-full mt-5 border-b-[1px] border-[#1D1D1C]`}
          >
            {/* SupHeader Component */}
            <SupHeader
              title={title}
              subtitle={subtitle}
              image={image}
              user={user}
              link={link}
            />

            {/* Conditional Rendering for Edit Button or Date */}
            {activeSection ? (
              // Show Edit Button and Pencil Icon when activeSection is true
              <div className="flex flex-col items-center cursor-pointer">
                <Pencil size={16} />
                <span className="text-[14px]">EDIT</span>
              </div>
            ) : (
              // Show Date when activeSection is false
              <div>
                <span>{date}</span>
              </div>
            )}
          </div>
        )}

        {/* Description */}
        {description && (
          <div>
            <p className="text-[16px]">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}