import clsx from 'clsx';
import React from 'react';
import UnstyledLink, { UnstyledLinkProps } from '../atoms/UnstyledLink';

const UnderlinedLink: React.FunctionComponent<UnstyledLinkProps> = ({
  children,
  href,
  className,
  ...props
}) => {
  return (
    <UnstyledLink
      className={clsx('underline decoration-dotted underline-offset-4 hover:decoration-solid font-medium', className)}
      href={href}
      {...props}
    >
      {children}
    </UnstyledLink>
  );
};

export default UnderlinedLink;
