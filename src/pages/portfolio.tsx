import Button from '@/components/atoms/Button';
import Card from '@/components/atoms/Card';
import Hero from '@/components/mollecules/Hero';
import ProjectCard from '@/components/mollecules/ProjectCard';
import Main from '@/components/template';
import { projects } from '@/data/projects';
import React from 'react';

const portfolio = () => {
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
