import { ProjectsData } from '../../data/projetcs-data';
import styles from './Projects.module.scss';
import { ProjectType } from '../../types/project-type';

export default function Projects() {
  return (
    <section className={styles.projects} id='projetos'>
      <h2>Projetos</h2>

      {ProjectsData.map(({description, id, img, links, title}: ProjectType) => (
        <div key={id}>
          <img src={img} alt="" />
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
              <a href={links.projectLink} className={styles.projeto}>Abrir projeto</a>
              <a href={links.githubLink} className={styles.codigo}>Abrir código</a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
