'use client';

import { AnimateEnter, Container } from '@/components';

export default function About() {
  return (
    <Container>
      <AnimateEnter delay={0.4}>
        <h1 className="text-5xl font-bold">Under development...</h1>
      </AnimateEnter>
    </Container>
  );
}
