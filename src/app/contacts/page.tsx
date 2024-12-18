import { Container } from '@/components/shared';
import { cn } from '@/lib/utils';
import React from 'react';

const Contacts = ({ className }: { className?: string }) => {
  return (
    <Container>
      <div className={cn('mt-10 mb-14', className)}>
        Contacts
      </div>
    </Container>
  );
};

export default Contacts;
