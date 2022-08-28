import clsx from 'clsx';

export interface HeroProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

const Hero = ({ title, description, ...props }: HeroProps) => {
  return (
    <section className={clsx('mb-8', props.className)}>
      <h1 className='mb-1'>{title}</h1>
      <p>{description}</p>
      {props.children}
    </section>
  );
};

export default Hero;
