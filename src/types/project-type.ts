export interface ProjectType {
  id: number;
  img: string;
  title: string;
  description: string;
  tecnologias: string[];
  links: {
    projectLink?: string;
    githubLink: string;
  }
}