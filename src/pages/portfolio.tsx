import Card from '@/components/atoms/Card';
import Hero from '@/components/mollecules/Hero';
import Main from '@/components/template';
import { ProjectProps } from '@/data/project';
import { projects } from '@/data/projects';
import clsx from 'clsx';
import React from 'react';

const portfolio = () => {
  const ProjectCard = ({ title, summary }: ProjectProps) => {
    return (
      <div className='flex flex-col h-full'>
        <h2 className='text-2xl font-medium'>{title}</h2>

        <p className='my-4'>{summary}</p>

        <p className='font-bold mt-auto'>Read more</p>
      </div>
    );
  };
  return (
    <Main className='mt-10'>
      <Hero
        title={'Portfolio'}
        description={
          'Projek yang saya buat dengan semua pengetahuan dan pengalaman saya.'
        }
      />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {projects.map((project) => {
          return (
            <Card key={project.title}>
              <ProjectCard {...project} />
            </Card>
          );
        })}
      </div>
    </Main>
  );
};

export default portfolio;
