import type { PropsWithChildren } from 'react';

export function HeaderText({ children }: PropsWithChildren) {
  return (
    <h2 className="text-white text-xl md:text-2xl header-double-line text-center md:text-left break-keep">
      {children}
    </h2>
  );
}
