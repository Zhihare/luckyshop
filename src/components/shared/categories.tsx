import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

const categ = ["Новинки", "Чоловікам", "Жінкам", "Дітям", "SALE"];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('inline-flex flex-wrap gap-1 bg-gray-50 p-1 rounded-2xl')}>
      {categ.map((cat, index) => (
        <a
          key={index} // Переносим key на элемент <a>
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary'
          )}
          href="#"
        >
          <button
            className={cn(className, {
              // Дополнительные стили для кнопки можно добавить здесь
            })}
          >
            {cat}
          </button>
        </a>
      ))}
    </div>
  );
};