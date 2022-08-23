import { NextSeo, NextSeoProps } from 'next-seo';
import { useRouter } from 'next/router';

interface HeadProps extends NextSeoProps {
  images?: any;
  image?: string;
}
const Head = ({
  title,
  description,
  images,
  image,
  openGraph,
  ...props
}: HeadProps) => {
  const router = useRouter();
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        site_name: 'Revdonz.my.id',
        title: `${title} · Revdonz.my.id`,
        description,
        url: 'https://www.revdonz.my.id/' + (router.asPath || ''),
        images: images
          ? images
          : image
          ? [
              {
                url: `https://www.revdonz.my.id/${image}`,
              },
            ]
          : undefined,
        ...openGraph,
      }}
      {...props}
    />
  );
};

export default Head;
