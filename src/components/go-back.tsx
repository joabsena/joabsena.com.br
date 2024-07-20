'use client';

import { useRouter } from "next/navigation";
import { ArrowLeft } from '@phosphor-icons/react'

export default function GoBack() {
  const { back } = useRouter()

  return (
    <div role="link" aria-label="go back to previous page" className="mb-8 flex gap-2 items-center text-neutral-600" onClick={back}>
      <ArrowLeft size={18} className="rotate" aria-label="arrow left" />
      <p className="cursor-pointer">Back</p>
    </div>
  )
}