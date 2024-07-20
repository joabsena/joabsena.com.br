'use client';

import { AnimateEnter, Container } from '@/components';
import GoBack from '@/components/go-back';

export default function About() {
  return (
    <Container>
      <AnimateEnter delay={0.2}>
        <GoBack />
      </AnimateEnter>

      <AnimateEnter delay={0.4}>
        <h1 className="text-5xl font-bold">About me</h1>
      </AnimateEnter>

      <div>
        <AnimateEnter delay={0.6}>
          <p className="mt-8 mb-4 text-neutral-700">
            Velit occaecat sit amet elit. Nulla occaecat ipsum qui id ad cupidatat. Commodo
            excepteur velit nulla nostrud officia exercitation excepteur non irure aliqua. Et culpa
            est sint do pariatur id duis. Cupidatat laboris anim esse amet veniam nisi mollit et
            incididunt ea velit do. Reprehenderit est dolor nisi non esse voluptate est Lorem.
          </p>
        </AnimateEnter>

        <AnimateEnter delay={0.8}>
          <p className="mt-4 mb-4 text-neutral-700">
            Velit occaecat sit amet elit. Nulla occaecat ipsum qui id ad cupidatat. Commodo
            excepteur velit nulla nostrud officia exercitation excepteur non irure aliqua. Et culpa
            est sint do pariatur id duis. Cupidatat laboris anim esse amet veniam nisi mollit et
            incididunt ea velit do. Reprehenderit est dolor nisi non esse voluptate est Lorem.
          </p>
        </AnimateEnter>

        <AnimateEnter delay={1}>
          <p className="mt-4 mb-4 text-neutral-700">
            Velit occaecat sit amet elit. Nulla occaecat ipsum qui id ad cupidatat. Commodo
            excepteur velit nulla nostrud officia exercitation excepteur non irure aliqua. Et culpa
            est sint do pariatur id duis. Cupidatat laboris anim esse amet veniam nisi mollit et
            incididunt ea velit do. Reprehenderit est dolor nisi non esse voluptate est Lorem.
          </p>
        </AnimateEnter>
      </div>
    </Container>
  );
}
