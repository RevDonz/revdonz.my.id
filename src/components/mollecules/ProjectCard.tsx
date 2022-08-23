import { ProjectProps } from '@/data/project';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import IconLink from './IconLink';

const ProjectCard = ({ title, summary, link }: ProjectProps) => {
  return (
    <div className='flex flex-col h-full'>
      <div className='flex justify-between'>
        <h2 className='text-2xl font-medium'>{title}</h2>
        <div className='flex gap-4'>
          {link.github && (
            <IconLink href={link.github} className='text-xl'>
              <FaGithub />
            </IconLink>
          )}
          {link.demo && (
            <IconLink href={link.demo} className='text-xl'>
              <HiOutlineExternalLink />
            </IconLink>
          )}
        </div>
      </div>
      <p className='my-4'>{summary}</p>
    </div>
  );
};

export default ProjectCard;
