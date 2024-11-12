import { cn } from '@/lib/utils';
import * as React from 'react';
import { Container } from './container';
import  Image  from 'next/image';
import { Button, SearchBar } from '../ui';
import { ArrowRight, ShoppingCart, User, Heart } from 'lucide-react';
import Link from 'next/link';
import { TopBar } from './top-bar';


export interface IAppProps {
    className: string;
}

export const Header: React.FC<IAppProps> = ({ className }) => {
    return (
        <header className={cn('sticky top-0 bg-white pt-2 shadow-lg shadow-black/5 z-10',className)}>
            <Container className='flex flex-wrap items-center justify-between py-1'>
                <Link href={'/'}>
                <div className='flex items-center gap-1'>
                    <Image
                        src='/man.png'
                        alt='Logo'
                        width={70}
                        height={70}
                    />
                    
                          {/* Приховуємо h1 на екранах до 640px і показуємо на більших */}
                        <h1 className='hidden sm:block text-1xl uppercase font-black w-[260px]'>Man_lucky_shop</h1>
                   
                    </div>
                </Link>
                 <TopBar />
                
                    
                <div className="flex flex-wrap items-center gap-3">
                    <div>
                    <SearchBar/>
                </div>
                     
                        <Button variant="outline" className="flex items-center gap-1">
                             <User size={20} />
                    </Button>

                    <Button variant="outline" className="flex items-center gap-1">
                             <Heart size={20} />
                    </Button>
                   
                    <div>
                        <Button className='group relative px-3'>
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
