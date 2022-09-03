type ButtonProps = {
  children: string;
  type: 'primary' | 'secondary' | 'small';
  href: string,
};

export const Anchor = ({ children, type, href }: ButtonProps) => {
  if (type === 'primary') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-block px-8 py-3 md:text-lg text-base font-medium rounded-md text-indigo-100 hover:text-indigo-50 hover:from-indigo-400 hover:to-indigo-700 bg-gradient-to-r from-indigo-500 to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-200"
      >
        {children}
      </a>
    );
  }

  if (type === 'small') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-block px-6 py-2 text-base font-medium rounded-md text-indigo-100 hover:text-indigo-50 hover:from-indigo-400 hover:to-indigo-700 bg-gradient-to-r from-indigo-500 to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-200"
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-block px-8 py-3 md:text-lg text-base font-medium rounded-md text-indigo-400 hover:bg-indigo-600 hover:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {children}
    </a>
  );
};
