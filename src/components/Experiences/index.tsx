import styles from './Experiences.module.scss';
import { tecnologiesLogos } from '../../data/tecnologies-logo';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Experiences() {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 1500,
    waitForAnimate: false,
    arrows: false,
  };
  return (
    <section className={styles.experiences} id='experiencias'>
      <h2>Experiências</h2>
      <p>
        Com pouco mais de um ano imerso no desenvolvimento independente, explorei profundamente as nuances do Frontend.Especializado como desenvolvedor Frontend, possuo expertise em React.js, JavaScript, TypeScript, Nextjs, SASS e styled components, além de habilidades sólidas em integração de APIs. Durante esse tempo, mergulhei em projetos desafiadores.Cada projeto foi uma oportunidade de aprendizado e aprimoramento, desde a criação de interfaces dinâmicas, criação de e-commerce e até a integração de dados por meio de APIs.
      </p>
      <div className={styles.slider}>
        <Slider {...settings}>
          {tecnologiesLogos.map((logo, index) => (
              <img src={logo.src} alt={logo.alt} key={index}/>
          ))}
        </Slider>
      </div>
    </section>
  )
}