'use client';
import React from 'react';
import { Container } from './container';
import { Phone, Mail, Clock, Instagram, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    
      <footer className="bg-black text-white py-10">
          <Container>
        <div className="container mx-auto grid grid-cols-1 gap-8 px-6 md:grid-cols-3">
          {/* Ліва частина футера */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <Phone className="text-white" />
              <Link href="tel:+380683004044" className="text-lg hover:underline">
                +38 (050) 237 75 87
              </Link>
            </div>
                      <Link href='/call-me' className="mt-2 text-sm hover:underline">
                          Передзвоніть мені
                      </Link>
            <div className="flex gap-4 mt-4">
              <div className="bg-white">
                <img src="/visa.png" alt="Visa" className="h-8" />
              </div>
              <div className="bg-white">
                <img src="/mastercard.png" alt="Mastercard" className="h-8" />
              </div>
            </div>
          </div>

        
          <div className="flex flex-col">
            <Link href="/privacy-policy" className={cn("mb-2 text-sm hover:underline", isActive("/privacy-policy") && "underline")}>
              Політика конфіденційності
                      </Link>
            <Link href="/about" className={cn("mb-2 text-sm hover:underline", isActive("/about") && "underline")}>
              Про наш магазин
                      </Link>
            <Link href="/payment_and_delivery" className={cn("mb-2 text-sm hover:underline", isActive("/payment_and_delivery") && "underline")}>
              Оплата та доставка
            </Link>
            <Link href="/return-policy" className={cn("mb-2 text-sm hover:underline", isActive("/return-policy") && "underline")}>
              Умови повернення
                      </Link>
             <Link href="/contacts" className={cn("mb-2 text-sm hover:underline", isActive("/contacts") && "underline")}>
              Контакти
                      </Link>
              <Link href="/vidguki" className={cn("mb-2 text-sm hover:underline", isActive("/vidguki") && "underline")}>
              Відгуки
            </Link>
         
          </div>

         
                  <div className="flex flex-col  items-start">
                <div className='flex justify-center gap-2 items-center mb-4'>
                          <Clock size={"14px"} className="inline mr-1" />   
                          <div className='flex flex-col justify-between '>
                              <p className="text-xs">Пн-Пт: 11.00 - 17.00</p>
                              <p className="mt-2 text-xs">СБ: 11.00-16.00</p>
                              <p className="mt-2  text-xs">НД: Вихідний</p>
                          </div>         
                </div>
            <Link href="mailto:manluckyshop@gmail.com" className="mb-2 text-xs hover:underline">
              <Mail size={"14px"} className="inline mr-2" /> manluckyshop@gmail.com
            </Link>
            <div className="flex items-center gap-4 mt-2">
                          <Link href="https://t.me/man_lucky" legacyBehavior>
                              <a target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                              <Send className="text-white w-6 h-6" />
                              </a>
              </Link>
                          <Link href="https://instagram.com/man_lucky_shop" legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                  <Instagram className="text-white w-6 h-6" />
                                  </a>  
              </Link>
                          <Link href="https://www.tiktok.com/@man_lucky_shop?_t=8q1IX6VRB5B&_r=1" legacyBehavior>
                              <a target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                                  <img src="/tiktok.png" alt="tik-tok" className="h-8" />
                                  </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-400">
          © Copyright 2024
              </div>
              </Container>
      </footer>
  );
};
