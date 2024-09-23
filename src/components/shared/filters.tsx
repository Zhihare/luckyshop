
"use client"

import React, { useState } from 'react';

import { Button, ScrollArea, Select, Slider } from '../ui';
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { cn } from './../../lib/utils';

interface Props {
className?: string;
};

export const Filters: React.FC<Props> = ({ className }) => {
          const [range, setRange] = useState<[number, number]>([600, 2000]); // Изначальные значения

  const handleValueChange = (value: [number, number]) => {
    setRange(value); // Обновляем диапазон при изменении ползунка
  };



  return (
      <div className={cn("bg-gray-100 p-4 rounded-md",className)}>
           {/* Підкатегорії */}
       <div className="mb-5">
        <h3 className="text-lg font-medium mb-2">Підкатегорії</h3>
            <ScrollArea>

            <ul className="space-y-2 p-2">
              {Array.from({ length: 20 }, (_, index) => (
                <li key={index} className="text-sm">
                      <label>
                        <a href="">
                        Підкатегорія {index + 1}
                        </a>
                      </label>
                    
                </li>
              ))}
                  </ul>
            </ScrollArea>
       
      </div>

      {/* Вартість */}
      <div className="mb-5">
        <h3 className="text-lg font-medium mb-2">Вартість</h3>
        <div className="flex flex-col space-y-4">
          <Slider
             className="w-full"
          defaultValue={[600, 2000]} // Изначальный диапазон
          max={2849}
          step={1}
          onValueChange={handleValueChange} // Обработчик изменения
          />
          <div className="flex justify-between text-sm mt-2">
          <span>{range[0]}</span> {/* Отображение минимального значения */}
          <span>{range[1]}</span> {/* Отображение максимального значения */}
        </div>
        </div>
      </div>

      {/* Колір */ }
      <div className="mb-5">
        <h3 className="text-lg font-medium mb-2">Колір</h3>
        <Select>
          <SelectTrigger className="inline-flex items-center justify-between w-full px-4 py-2 bg-white border rounded-md">
            <SelectValue placeholder="Усі" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Усі">Усі</SelectItem>
            <SelectItem value="Чорний">Чорний</SelectItem>
            <SelectItem value="Білий">Білий</SelectItem>
          </SelectContent>
        </Select>
          </div>
          

      {/* Розмір */}
      <div className="mb-5">
        <h3 className="text-lg font-medium mb-2">Розмір</h3>
        <Select>
          <SelectTrigger className="inline-flex items-center justify-between w-full px-4 py-2 bg-white border rounded-md">
            <SelectValue placeholder="Усі" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Усі">Усі</SelectItem>
            <SelectItem value="S">S</SelectItem>
            <SelectItem value="M">M</SelectItem>
            <SelectItem value="L">L</SelectItem>
          </SelectContent>
        </Select>
          </div>
          
            <div className="mb-5">
        <h3 className="text-lg font-medium mb-2">Cезон</h3>
        <Select>
          <SelectTrigger className="inline-flex items-center justify-between w-full px-4 py-2 bg-white border rounded-md">
            <SelectValue placeholder="Усі" />
          </SelectTrigger>
                  <SelectContent>
            <SelectItem value="Усі">Усі</SelectItem>
            <SelectItem value="Весна-Літо">Весна-Літо</SelectItem>
            <SelectItem value="Осінь-Зима">Осінь-Зима</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Бренд */}
      <div className="mb-5">
        <h3 className="text-lg font-medium mb-2">Бренд</h3>
        <Select>
          <SelectTrigger className="inline-flex items-center justify-between w-full px-4 py-2 bg-white border rounded-md">
            <SelectValue placeholder="Усі" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Усі">Усі</SelectItem>
            <SelectItem value="Nike">Nike</SelectItem>
            <SelectItem value="Adidas">Adidas</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Матеріал */}
      <div className="mb-5">
        <h3 className="text-lg font-medium mb-2">Матеріал</h3>
        <Select>
          <SelectTrigger className="inline-flex items-center justify-between w-full px-4 py-2 bg-white border rounded-md">
            <SelectValue placeholder="Усі" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Усі">Усі</SelectItem>
            <SelectItem value="Шкіра">Шкіра</SelectItem>
            <SelectItem value="Тканина">Тканина</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Кнопка очистити */}
      <Button className="text-white w-full py-2 rounded-md">
        Очистити фільтр
      </Button>
    </div>
 );
};