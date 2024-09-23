"use client"
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { CategoriesItem } from './categoriesItem';
import { DropdownMenu } from './dropdown-menu';

interface Props {
  className?: string;
}

const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className={cn('flex flex-wrap gap-1 bg-gray-50 p-3 pb-0 rounded-2xl')}>
      {/* Основные категории */}
      <ul className="flex flex-wrap space-x-2">
        {CategoriesItem.map((category, index) => (
          <li
            key={category.name}
            onMouseEnter={() => setActiveCategory(category.name)}
            onMouseLeave={() => setActiveCategory(null)}
            className="cursor-pointer pb-3"
          >
            <a className={cn('flex items-center font-bold h-11 rounded-2xl px-4',
                       activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary'
                  )}>{category.name}</a>

            {/* Подкатегории, которые появляются при ховере */}
            {activeCategory === category.name && (
              <DropdownMenu subcategory={category.subcategories}/>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
