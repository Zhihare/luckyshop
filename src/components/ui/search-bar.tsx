'use client';

import { Search, X } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { cn } from '@/lib/utils';

interface SearchProps {
  placeholder?: string;
}

export const SearchBar: React.FC<SearchProps> = ({ placeholder = 'Пошук' }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Функція для відкриття/закриття поля пошуку
  const toggleSearch = () => setIsOpen(!isOpen);

  return (
    <div className="flex items-center relative">
      {/* Кнопка пошуку або закриття */}
      <Button
        onClick={toggleSearch}
        variant='outline'
        className={cn(
          'px-2 py-2 bg-transparent border-gray-200 shadow-md text-gray-700 rounded-full transition-all duration-300',
          isOpen ? 'rounded-r-none' : ''
        )}
      >
        {isOpen ? (
          <X className="text-gray-400 h-5 w-5" /> // Іконка закриття
        ) : (
          <Search className="text-gray-400 h-5 w-5" /> // Іконка пошуку
        )}
      </Button>

      {/* Поле вводу з анімацією */}
      <div
        className={cn(
          'transition-all duration-300 overflow-hidden flex items-center rounded-full max-w-3xl ',
          isOpen ? 'w-64 border border-gray-300 rounded-full' : 'w-0'
        )}
      >
        <Input
          type="text"
          placeholder={placeholder}
          className={cn(
            'w-full bg-transparent border-none outline-none text-gray-600',
            isOpen ? 'visible' : 'invisible'
          )}
              />
                  
      {/* Кнопка пошуку */}
      <Button variant='outline' className="px-2 py-2 bg-transparent border-gray-100 text-gray-700 rounded-full rounded-l-none">
        <Search className="text-gray-400 h-5 w-5" />
      </Button>
      </div>
    </div>
  );
};
