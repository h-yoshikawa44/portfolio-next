import type { PropsWithChildren } from 'react';

export function SectionBase({ children }: PropsWithChildren) {
  return (
    <section className="bg-brand-secondary w-full md:px-14 py-14 px-4">
      {children}
    </section>
  );
}
