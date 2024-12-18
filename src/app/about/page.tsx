import { Container } from '@/components/shared';
import { cn } from '@/lib/utils';
import React from 'react';

const About = ({ className }: { className?: string }) => {
  return (
    <Container>
      <div className={cn('mt-10 mb-14', className)}>
        About
      </div>
    </Container>
  );
};

export default About;
