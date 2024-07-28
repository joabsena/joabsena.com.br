import type { ReactNode } from 'react';

import c from 'clsx'

export function Container({ children, className }: { children: ReactNode, className?: string }) {
  return <div className={c('flex flex-col justify-center px-6 sm:px-8', className)}>{children}</div>;
}
