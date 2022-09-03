/* eslint-disable react/require-default-props */
import type { ReactNode } from 'react';

type LayoutProps = {
  readonly title?: string;
  readonly id: string;
  readonly children: ReactNode;
};

export const SectionTemplate = ({ title, id, children }: LayoutProps) => {
  const titleElements = title?.split(' ');
  const first = titleElements?.shift();
  const last = titleElements?.join(' ');

  return (
    <section id={id} className="mx-auto bg-black flex flex-col justify-center overflow-y-hidden">
      {children}
    </section>
  );
};
