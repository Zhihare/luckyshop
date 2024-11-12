import { cn } from '@/lib/utils';
import React from 'react';
import { Categories } from './categories';
import { Container } from './container';

interface Props {
className?: string;
};

export const TopBar: React.FC<Props> = ({className}) => {
  return (
      <div className={cn('bg-white pt-2', className)}>
        <Container className='relative flex flex-wrap items-center justify-center'>
              <Categories/>
        </Container>
    </div>
 );
};