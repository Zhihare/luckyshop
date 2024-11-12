"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface CategoryBlockProps {
  title: string;
  image: string;
  link: string;
}

export const CategoryBlock: React.FC<CategoryBlockProps> = ({ title, image, link }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={link} className="group relative overflow-hidden block">
      <div className="relative aspect-square w-full">
        {!imageError ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Изображение не доступно</span>
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
      </div>
    </Link>
  );
};