'use client';

import { Search } from 'lucide-react';
import React from 'react';
import { Button } from './button';
import { Input } from './input';
import { cn } from '@/lib/utils';

interface SearchProps {
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchProps> = ({ placeholder = 'Пошук', className }) => {
  return (
    <div
      className={cn(
        "flex items-center relative w-full md:w-auto", // full-width on mobile
        className
      )}
    >
      {/* Поле вводу (завжди видиме у мобільному в'юпорті) */}
      <div
        className="flex items-center w-4/5 md:w-64 border border-blue-600 rounded-full shadow-md px-2"
      >
        <Input
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent border-none outline-none text-gray-600"
        />
        {/* Кнопка пошуку (праворуч) */}
        <Button
          variant="outline"
          className="px-2 py-2 bg-transparent text-gray-600 rounded-full"
        >
          <Search className="text-blue-600 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
