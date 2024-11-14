'use client';

import { AnimateEnter, DivisorLine } from '@/components';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <AnimateEnter delay={0.4}>
        <h1 className="text-5xl font-bold">Joab Sena</h1>
      </AnimateEnter>

      <AnimateEnter delay={0.6}>
        <p className="mt-4 mb-4 text-balance">
          Software Engineer with experience in creating projects focused on performance and
          accessibility, always paying attention to details when implementing UI mockups.
        </p>
      </AnimateEnter>

      <AnimateEnter delay={0.8}>
        <p>
          Can be found on{' '}
          <Link href="https://twitter.com/joabdev" className="text-blue-500">
            X
          </Link>
          ,{' '}
          <Link href="https://github.com/joabsena" className="text-blue-500">
            github
          </Link>{' '}
          and{' '}
          <Link href="https://www.linkedin.com/in/joab-sena/" className="text-blue-500">
            Linkedin
          </Link>
        </p>
      </AnimateEnter>

      <AnimateEnter delay={1}>
        <DivisorLine />
      </AnimateEnter>

      <AnimateEnter delay={1.2}>
        <div className="flex gap-4">
          <Link href="/about" className="underline">
            About
          </Link>
          <Link href="/blog" className="underline">
            Blog
          </Link>
          <Link href="/laboratory" className="underline">
            Laboratory
          </Link>
        </div>
      </AnimateEnter>
    </>
  );
}
