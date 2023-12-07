export interface ProjectType {
  id: number;
  img: string;
  title: string;
  description: string;
  links: {
    projectLink: string;
    githubLink: string;
  }
}