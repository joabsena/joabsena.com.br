'use client';

import { Container, ToggleTheme } from '@/components';
import type { ReactNode } from 'react';

interface TemplateProps {
  children: ReactNode;
}

export default function RootLayout({ children }: TemplateProps) {
  return (
    <Container>
      <ToggleTheme />
      {children}
    </Container>
  );
}
