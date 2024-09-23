import { cn } from '@/lib/utils';
import * as React from 'react';
import { Container } from './container';
import  Image  from 'next/image';
import { Button } from '../ui';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';

export interface IAppProps {
    className: string;
}

export const Header: React.FC<IAppProps> = ({ className }) => {
    return (
        <header className={cn('',className)}>
            <Container className='flex items-center justify-between py-1'>
                <div className='flex items-center gap-4'>
                    <Image
                        src='/man.png'
                        alt='Logo'
                        width={70}
                        height={70}
                    />
                    <div>
                        <h1 className='text-1xl uppercase font-black'>Man_lucky_shop</h1>
                        <p className='text-sm text-gray-400 leading-3 '>Найкращий магазин одягу та взуття</p>
                    </div>
                    </div>

                     {/* <div className="mx-10 flex-1">
                    </div> */}
                    
                    <div className="flex items-center gap-3">
                        <Button variant="outline" className="flex items-center gap-1">
                             <User size={16} />
                        Увійти
                    </Button>
                    
                    <div>
                        <Button className='group relative'>
                            <b>320 грн</b>
                            <span className="h-full w-[1px] bg-white/30 mx-3">
                            </span>
                            <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                                <ShoppingCart className='h-4 w-4 relative' strokeWidth={2} />
                                <b>1</b>
                            </div>
                              <ArrowRight
          size={20}
          className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
        />
                        </Button>
                    </div>
                    </div>
            </Container>
      </header>
    );
  }
