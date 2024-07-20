'use client';

import { AnimateEnter, Container } from '@/components';
import GoBack from '@/components/go-back';
import { ArrowRight } from '@phosphor-icons/react';
import Link from 'next/link';

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
            My name is Joab Sena Barbosa. I was born and raised in Brazil. I have a degree in
            Computer Science and I am a Frontend Engineer at <Link href="https://www.conexasaude.com.br/" className="text-blue-500">Conexa Saúde</Link>, which is the largest
            digital ecosystem for physical and mental health in Brazil.
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
