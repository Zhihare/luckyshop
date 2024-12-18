"use client";
import React from 'react';
import { cn } from '@/lib/utils';

interface Subcategory {
  title: string;
  items: string[];
}

interface Props {
  className?: string;
  subcategory: Subcategory[];
}

export const DropdownMenu: React.FC<Props> = ({subcategory}) => {
  return (
    <div
      className={cn(
        'bg-white shadow-lg rounded-b-2xl border-t border-gray-200 animate-fade-in',
        'fixed left-0 right-0 top-[60px] z-20 px-5 py-6',
        'max-h-[calc(100vh-60px-2rem)] overflow-y-auto'
      )}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {subcategory.map((group) => (
          <div key={group.title} className="min-w-[200px]">
            <h4 className="font-bold text-gray-800 mb-2">{group.title}</h4>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};