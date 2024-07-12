import type { ReactNode } from 'react';

export function Container({ children }: { children: ReactNode }) {
  return <main className="container mx-auto mt-16 px-5 md:mt-48 md:px-56">{children}</main>;
}
