export type TimelineProps = {
  title: string;
  description: string;
  place: string;
  startDate?: Date;
  endDate?: Date | null;
  date?: string;
  type: 'edu' | 'work';
};

export const Timelines: TimelineProps[] = [
  {
    title: 'Frontend Developer',
    description:
      'Kerjago is a platform to educate job and job seekers to Technology Enthusiast and a platform to bring together Human Resources, Users, Companies and Job Seekers. I work as a Frontend Developer that developed a website for kerjago.com',
    place: 'Kerjago.id',
    date: 'May 2020 - Present',
    type: 'work',
  },
  {
    title: 'College',
    description:
      'Just like when I was in vocational high school, I majored in Software Engineering in college. Current GPA 3.9 out of 4.0',
    place: 'Telkom University',
    date: '2020 - Present',
    type: 'edu',
  },
  {
    title: 'Intern Junior Web Developer',
    description:
      'I work as a Web Developer, we developed an e-commerce website for reseller, deployed website that has been finished by our teams to web hosting service. I make a user manual website for clients.',
    place: 'PT. Inovindo Digital Media',
    date: 'Jan 2019 - Mar 2019',
    type: 'work',
  },
  {
    title: 'Vocational High School',
    description:
      'I majored in Software Engineering because I was really interested in Computer Science.',
    place: 'SMKN 7 Baleendah',
    date: '2017 - 2020',
    type: 'edu',
  },
];
