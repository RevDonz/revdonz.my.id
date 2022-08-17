import { ProjectProps } from '@/data/project';
import UnstyledLink from '../atoms/UnstyledLink';

const ProjectCard = ({ title, summary, link }: ProjectProps) => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className='text-2xl font-medium'>{title}</h2>

      <p className='my-4'>{summary}</p>

      <div className='flex mt-auto gap-4'>
        {/* <UnstyledLink href={link.github}>Repository</UnstyledLink>
        <UnstyledLink href={link.demo}>Demo</UnstyledLink> */}
        <UnstyledLink href={''}>Repository</UnstyledLink>
        <UnstyledLink href={''}>Demo</UnstyledLink>
      </div>
    </div>
  );
};

export default ProjectCard;
