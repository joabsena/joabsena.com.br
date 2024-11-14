'use client';

import { Container } from '@/components';
import type { ReactNode } from 'react';

interface TemplateProps {
  children: ReactNode;
}

export default function RootLayout({ children }: TemplateProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}
