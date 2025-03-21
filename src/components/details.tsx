import React from 'react';
import { Pencil, Plus } from 'lucide-react';

interface DetailsProps {
  topic?: string;
  user?: boolean;
  title?: string;
  description?: string;
  date?: string;
  subtitle?: string;
  onClick?: () => void;
}

export default function Details({ topic, user, title, description, date, subtitle, onClick }: DetailsProps) {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex justify-between w-full items-center my-7 border-b pb-5 border-[#1D1D1C]'>
        {topic && <h1>{topic}</h1>}
        {user && (
          <button
            className='w-auto h-[40px] text-[#ABABAB] rounded-md space-x-1 items-center flex'
            onClick={onClick}
          >
            <Pencil size={16} />
            <span className='text-[14px]'>EDIT</span>
            <Plus size={20} />
          </button>
        )}
      </div>
      <div className='flex flex-col w-full gap-[16px]'>
        {(title || subtitle || date) && (
          <div className='flex justify-between w-full mt-5 border-b-[1px] border-[#1D1D1C]'>
            <div className='flex flex-col'>
              {title && <h1 className='text-[#BBBBBB] text-[18px]'>{title}</h1>}
              {subtitle && <span className='text-[#999999] text-[14px]'>{subtitle}</span>}
            </div>
            {date && <div><span>{date}</span></div>}
          </div>
        )}
        {description && (
          <div>
            <p className='text-[16px]'>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
