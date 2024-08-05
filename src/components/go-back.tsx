'use client';

import { useRouter } from 'next/navigation';
import { ArrowUpLeft } from '@phosphor-icons/react';

export default function GoBack() {
  const { back } = useRouter();

  return (
    <div
      role="link"
      aria-label="go back to previous page"
      className="mb-8 flex gap-2 items-center text-secondary dark:text-secondary-dark cursor-pointer"
      onClick={back}
    >
      <ArrowUpLeft size={18} className="rotate" aria-label="arrow left" />
      <p>Back</p>
    </div>
  );
}
