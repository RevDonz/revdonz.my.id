import { ProjectProps } from '@/data/project';
import UnderlinedLink from './UnderlinedLink';
import { FaGithub } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';

const ProjectCard = ({ title, summary, link }: ProjectProps) => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className='text-2xl font-medium'>{title}</h2>

      <p className='my-4'>{summary}</p>

      <div className='flex mt-auto gap-4'>
        {/* <UnderlinedLink href={link.github}>Repository</UnderlinedLink>
        <UnderlinedLink href={link.demo}>Demo</UnderlinedLink> */}
        <UnderlinedLink href={''}>
          <div className='flex items-center gap-1'>
            <FaGithub />
            <p>Repository</p>
          </div>
        </UnderlinedLink>
        <UnderlinedLink href={''}>
          <div className='flex items-center gap-1'>
            <FiGlobe />
            <p>Demo</p>
          </div>
        </UnderlinedLink>
      </div>
    </div>
  );
};

export default ProjectCard;
