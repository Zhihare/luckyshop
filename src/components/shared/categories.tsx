"use client";
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { CategoriesItem } from './categoriesItem';
import { DropdownMenu } from './dropdown-menu';

interface Props {
  className?: string;
}


export const Categories: React.FC<Props> = ({  }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className={cn(' bg-gray-50 p-3 rounded-2xl shadow-sm')}>
      {/* Список категорій */}
      <ul className="flex space-x-6 border-b">
        {CategoriesItem.map((category) => (
          <li
            key={category.name}
            onMouseEnter={() => setActiveCategory(category.name)}
            onMouseLeave={() => setActiveCategory(null)}
            className=" a cursor-pointer"
          >
            <a className={cn(
              "block pb-3 font-bold text-gray-700 hover:text-blue-500 transition-colors",
              activeCategory === category.name && "text-blue-600 border-b-2 border-blue-600"
            )}>
              {category.name}
            </a>

            {/* Підкатегорії */}
            {activeCategory === category.name && (
              <DropdownMenu subcategory={category.subcategories} />
            )}
          </li>
          
        ))}
      </ul>
    </div>
  );
};
