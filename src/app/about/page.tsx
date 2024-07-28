'use client';

import { AnimateEnter } from '@/components';
import GoBack from '@/components/go-back';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <AnimateEnter delay={0.2}>
        <GoBack />
      </AnimateEnter>

      <AnimateEnter delay={0.4}>
        <h1 className="text-5xl font-bold">About me</h1>
      </AnimateEnter>

      <div>
        <AnimateEnter delay={0.6}>
          <p className="mt-8 mb-4 text-neutral-700 text-balance">
            My name is Joab Sena Barbosa. I was born and raised in Brazil. I have a degree in
            Computer Science and I am a Frontend Engineer at{' '}
            <Link href="https://www.conexasaude.com.br/" className="text-blue-500">
              Conexa Saúde
            </Link>
            , which is the largest digital ecosystem for physical and mental health in Brazil.
          </p>
        </AnimateEnter>

        <AnimateEnter delay={0.8}>
          <p className="mt-4 mb-4 text-neutral-700 text-balance">
            From a young age, I have been passionate about both soccer and technology. During my
            undergraduate studies, I developed a strong interest in web development, especially in
            the frontend. This passion led me to specialize in creating efficient and user-friendly
            interfaces.
          </p>
        </AnimateEnter>

        <AnimateEnter delay={1}>
          <p className="mt-4 mb-4 text-neutral-700 text-balance">
            I am constantly seeking to improve my skills and expand my knowledge. My next goal is to
            transition to the backend, exploring technologies such as Node.js and Golang, to become
            a full-stack developer with a strong frontend specialization.
          </p>
        </AnimateEnter>

        <AnimateEnter delay={1}>
          <p className="mt-4 mb-4 text-neutral-700 text-balance">
            Outside of work, I love learning new technologies, playing video games, and spending
            time with my family. As the father of Ana Júlia, I cherish every moment with my daughter
            and strive to maintain a healthy work-life balance.
          </p>
        </AnimateEnter>
      </div>
    </>
  );
}
