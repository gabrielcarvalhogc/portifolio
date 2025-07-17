interface ProjectLink {
  icon: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  link: ProjectLink[];
  imageUrl: string;
}
