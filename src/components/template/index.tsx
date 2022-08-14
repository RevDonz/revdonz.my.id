import clsx from 'clsx';
import { ReactNode } from 'react';

interface MainProps {
  className?: string;
  children?: ReactNode;
}
const Main: React.FC<MainProps> = ({ children, className, ...props }) => {
  return (
    <>
      <div
        id='main-content'
        className={clsx(
          'layout flex flex-col flex-1 h-full',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default Main;
