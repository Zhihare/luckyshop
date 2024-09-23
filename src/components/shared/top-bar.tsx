import { cn } from '@/lib/utils';
import React from 'react';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';
import { Container } from './container';

interface Props {
className?: string;
};

export const TopBar: React.FC<Props> = ({className}) => {
  return (
      <div className={cn('sticky top-0 bg-white pt-2 shadow-lg shadow-black/5 z-10', className)}>
        <Container className='relative flex flex-wrap items-center justify-center'>
              <Categories/>
              {/* <SortPopup /> */}
        </Container>
    </div>
 );
};