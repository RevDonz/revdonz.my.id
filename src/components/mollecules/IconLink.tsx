import clsx from 'clsx';
import React from 'react';
import UnstyledLink, { UnstyledLinkProps } from '../atoms/UnstyledLink';

const IconLink: React.FunctionComponent<UnstyledLinkProps> = ({
  children,
  href,
  className,
  ...props
}) => {
  return (
    <UnstyledLink
      className={clsx('items-center flex', 'hover:text-primary-600', className)}
      href={href}
      {...props}
    >
      {children}
    </UnstyledLink>
  );
};

export default IconLink;
