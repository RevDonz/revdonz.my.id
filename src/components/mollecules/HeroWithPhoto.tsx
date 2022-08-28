import clsx from 'clsx';
import Image from 'next/image';

export interface HeroProps {
  title: string;
  description?: string;
  subtitle: string;
  children?: React.ReactNode;
}

const HeroWithPhoto = ({
  title,
  description,
  subtitle,
  children,
}: HeroProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col md:flex-row-reverse justify-between mb-8 w-full'
      )}
    >
      <figure
        className={clsx(
          'w-24 h-24',
          'md:w-40 h-40',
          'relative',
          'flex items-center self-start md:justify-end',
          'mb-4 md:mb-0 md:ml-4'
        )}
      >
        <Image
          src={'/me.jpg'}
          alt='Profile Picture'
          width={150}
          height={150}
          layout='intrinsic'
          className={clsx('rounded-full object-cover')}
        />
      </figure>
      <section className={clsx('w-full md:w-5/6')}>
        <h1>{title}</h1>
        <p
          className={clsx(
            'mt-2 mb-4 max-w-max',
            'text-transparent font-bold text-xl md:text-2xl',
            'bg-clip-text bg-gradient-to-r',
            'from-primary-500 to-secondary-500 via-ternary-500'
          )}
        >
          {subtitle}
        </p>
        <p className={clsx('max-w-prose', 'mb-2 md:mb-4')}>{description}</p>
        <div className='space-y-2 md:space-y-4'>{children}</div>
      </section>
    </div>
  );
};

export default HeroWithPhoto;
