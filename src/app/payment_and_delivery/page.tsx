import { Container } from '@/components/shared';
import { cn } from '@/lib/utils';
import React from 'react';

const Payment = ({ className }: { className?: string }) => {
  return (
    <Container>
      <div className={cn('mt-10 mb-14', className)}>
        Payment
      </div>
    </Container>
  );
};

export default Payment;
