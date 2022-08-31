import { ProjectProps } from '@/data/projects';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import IconFinder from '../atoms/IconFinder';
import IconLink from './IconLink';

const ProjectCard = ({ title, summary, link, stack }: ProjectProps) => {
  return (
    <div className='flex flex-col h-full'>
      <div className='flex justify-between gap-4'>
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
      <div className='flex gap-2 mt-auto'>
        {stack.length > 0 &&
          stack.map((item, index) => <IconFinder type={item} key={index} className='text-lg' />)}
      </div>
    </div>
  );
};

export default ProjectCard;
