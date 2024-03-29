import { ProjectsData } from '../../data/projetcs-data';
import styles from './Projects.module.scss';
import { ProjectType } from '../../types/project-type';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Projects() {
  return (
    <section className={styles.section} id='projetos'>
      <h2 className={styles.title}>Projetos</h2>

      {ProjectsData.map(({description, id, img, links, title, tecnologias}: ProjectType) => (
        <div key={id} className={styles.container}>
          <img src={img} alt="" />
          <div className={styles.projectInfo}>
            <h3 className={styles.projectName}>{title}</h3>
            <p className={styles.projectDescription}>{description}</p>
            <div className={styles.tecnologies}>{
              tecnologias.map((item, index) => (
                <span key={index}>{item}</span>)
              )}
            </div>
            <div className={styles.projectLinks}>
              <a href={links.projectLink} className={styles.projetoLink} target='_blank'>
                <p>Projeto</p>
                <LinkIcon/>
              </a>
              <a href={links.githubLink} className={styles.codigoLink} target='_blank'>
                <p>Repositório</p>
                <GitHubIcon/>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
