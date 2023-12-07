import styles from './Experiences.module.scss';
import { tecnologiesLogos } from '../../data/tecnologies-logo';

export default function Experiences() {
  return (
    <div className={styles.experiences}>
      <h2>Experiências</h2>
      <p>
        Com pouco mais de um ano imerso no desenvolvimento independente, explorei profundamente as nuances do Frontend.Durante esse tempo, mergulhei em projetos desafiadores.Cada projeto foi uma oportunidade de aprendizado e aprimoramento, desde a criação de interfaces dinâmicas, criação de e-commerce e até a integração de dados por meio de APIs.
      </p>
      <div>
        {tecnologiesLogos.map((logo, index) => (
          <img src={logo.src} alt={logo.alt} key={index}/>
        ))}
      </div>
    </div>
  )
}