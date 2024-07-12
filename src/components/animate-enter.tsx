'use client';

import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion';
import { type ReactNode } from 'react';

interface AnimateEnterProps {
  children: ReactNode;
  delay?: number;
}

export function AnimateEnter({ children, delay = 0 }: AnimateEnterProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ ease: 'easeOut', duration: 0.35, delay }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}