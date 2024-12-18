import { Container } from '@/components/shared';
import { cn } from '@/lib/utils';
import React from 'react';

const Vidguki = ({ className }: { className?: string }) => {
  return (
    <Container>
      <div className={cn('mt-10 mb-14', className)}>
        Vidguki
      </div>
    </Container>
  );
};

export default Vidguki;
