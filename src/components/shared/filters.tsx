
import React from 'react';
import { Title } from './title';

import { Button, ScrollArea, Select, Slider } from '../ui';
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface Props {
className?: string;
};

export const Filters: React.FC<Props> = ({className}) => {
  return (
      <div className={className}>
          <Title text="Фільтрація" size="sm" className="mb-5 font-normal" />

           {/* Підкатегорії */}
       <div className="mb-5">
        <h3 className="text-lg font-medium mb-2">Підкатегорії</h3>
            <ScrollArea>

            <ul className="space-y-2 p-2">
              {Array.from({ length: 20 }, (_, index) => (
                <li key={index} className="text-sm">
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Підкатегорія {index + 1}
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
            defaultValue={[600]}
            max={2849}
            step={1}
          />
          <div className="flex justify-between text-sm mt-2">
            <span>600</span>
            <span>2849</span>
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