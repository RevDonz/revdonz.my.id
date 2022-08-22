export interface HeroProps {
  title: string;
  description: string;
  // children?: React.ReactNode;
  // className?: string;
}

const Hero = ({ title, description }: HeroProps) => {
  return (
    <section className="mb-8">
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
};

export default Hero;
