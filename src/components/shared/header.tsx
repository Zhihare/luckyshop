import { cn } from '@/lib/utils';
import * as React from 'react';
import { Container } from './container';
import  Image  from 'next/image';

export interface IAppProps {
    className: string;
}

export const Header: React.FC<IAppProps> = ({ className }) => {
    return (
        <header className={cn('border border-b',className)}>
            <Container className='flex items-center justify-between py-8'>
                <div>
                    <Image
                        src='/man.png'
                        alt='Logo'
                        width={40}
                        height={40}
                    />
                    <div>
                        <h1 className='text-1xl uppercase font-black'>Man_lucky_shop</h1>
                        <p className='text-sm text-gray-400 leading-3 '>Найкращий магазин одягу та взуття</p>
                    </div>
                </div>
            </Container>
      </header>
    );
  }
