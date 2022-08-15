export interface ProjectProps {
  title: string;
  date: string;
  summary: string;
  image: string;
  stack: Array<string>;
  link: {
    github: string;
    demo: string;
  };
}
