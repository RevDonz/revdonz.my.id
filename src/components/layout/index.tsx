import { ReactNode } from 'react';

interface MainProps {
  className?: string;
  children?: ReactNode;
}
const Main: React.FC<MainProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={
        `flex flex-col flex-1 w-full h-full max-w-5xl mx-auto pt-6 px-2 md:pt-10 md:px-0` +
        ` ` +
        className
      }
      {...props}
    >
      {children}
    </div>
  );
};

export default Main;
