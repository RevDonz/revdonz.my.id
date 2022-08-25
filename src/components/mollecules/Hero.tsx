import clsx from 'clsx';

export interface HeroProps {
  title: string;
  description: string;
  className?: string;
}

const Hero = ({ title, description, ...props }: HeroProps) => {
  return (
    <section className={clsx('mb-8', props.className)}>
      <h1 className='mb-1'>{title}</h1>
      <p>{description}</p>
    </section>
  );
};

export default Hero;
