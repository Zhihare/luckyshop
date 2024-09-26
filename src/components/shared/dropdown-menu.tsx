"use client";
import React from 'react';

// Определяем интерфейс для каждого подкатегории
interface Subcategory {
  title: string;
  items: string[];
}

interface Props {
  className?: string;
  subcategory: Subcategory[]; // subcategory — это массив объектов Subcategory
}

export const DropdownMenu: React.FC<Props> = ({ className, subcategory }) => {
  return (
    <div className="absolute top-[90%] left-0 w-full bg-white shadow-lg p-2 grid grid-cols-4 gap-2 z-10">
                {subcategory.map((subcategory) => (
                  <div key={subcategory.title}>
                    <h4 className="font-bold">{subcategory.title}</h4>
                    <ul className="space-y-0.5">
                      {subcategory.items.map((item) => (
                        <li key={item}>
                          <a href="#" className="hover:text-blue-500">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
  );
};
