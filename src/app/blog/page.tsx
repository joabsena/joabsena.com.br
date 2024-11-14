'use client';

import { AnimateEnter, Container } from '@/components';
import GoBack from '@/components/go-back';

export default function Posts() {
  return (
    <Container>
      <AnimateEnter delay={0.2}>
        <GoBack />
      </AnimateEnter>

      <AnimateEnter delay={0.4}>
        <h1 className="text-5xl font-bold">Under development...</h1>
      </AnimateEnter>
    </Container>
  );
}
