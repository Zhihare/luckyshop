import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
className?: string;
};

const categ = ["Новинки", "Чоловікам", "Жінкам", "Дітям","SALE"];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({className}) => {
  return (
      <div className={cn('inline-flex flex-wrap gap-1 bg-gray-50 p-1 rounded-2xl')}>
          {categ.map((cat, index) => (
              <a className={cn("flex items-center font-bolt h-11 rounded-2xl px-5",
                  activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary'
              )} href="">
              <button
                  key={index}
                  className={cn(className, {
                    // 'text-sm font-medium text-gray-800 hover:text-blue-600': index!==activeIndex,
                    // 'text-sm font-medium text-primary hover:text-primary-foreground': index===activeIndex,
                  })}
                  >
                  {cat}
                  </button>
            </a>
          ))}
  
    </div>
 );
};