import clsx from 'clsx';
import { ReactNode } from 'react';

interface MainProps {
  className?: string;
  children?: ReactNode;
}
const Main: React.FC<MainProps> = ({ children, className, ...props }) => {
  return (
    <div className={clsx('mt-36', className)} {...props}>
      {children}
    </div>
  );
};

export default Main;
