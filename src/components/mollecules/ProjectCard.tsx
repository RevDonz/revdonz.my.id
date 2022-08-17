import { ProjectProps } from '@/data/project';
import UnderlinedLink from './UnderlinedLink';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, summary, link }: ProjectProps) => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className='text-2xl font-medium'>{title}</h2>

      <p className='my-4'>{summary}</p>

      <div className='flex mt-auto gap-4'>
        {/* <UnderlinedLink href={link.github}>Repository</UnderlinedLink>
        <UnderlinedLink href={link.demo}>Demo</UnderlinedLink> */}
        <UnderlinedLink href={''}>
          <div className="flex items-center gap-1">
            <FaGithub />
            <p>Repository</p>
          </div>
        </UnderlinedLink>
        <UnderlinedLink href={''}>Demo</UnderlinedLink>
      </div>
    </div>
  );
};

export default ProjectCard;
