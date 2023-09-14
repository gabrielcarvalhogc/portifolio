import styles from './Apresentacao.module.scss';
import MinhaFoto from '/minha-foto.jpeg';
import LogoCSS from '/tecnologias/logo-css-3.png';
import LogoHTML from '/tecnologias/logo-HTML5.png';
import LogoJavascript from '/tecnologias/logo-javascript.png';
import LogoTypescript from '/tecnologias/logo-typescript.png';
import LogoReact from '/tecnologias/logo-react.png';


export default function Apresentacao() {
  return (
    <section className={styles.secao}>
      <div className={styles.descricao}>
        <h1 className={styles.descricao__titulo}>Olá eu sou um Desenvolvedor Front-end</h1>
        <p className={styles.descricao__textos}>Meu nome é</p>
        <p className={styles.descricao__textos}>Gabriel Carvalho</p>
      </div>

      <div className={styles.sobre}>
        <img 
          className={styles.sobre__imagem} 
          src={MinhaFoto} 
          alt="" 
        />

        <div className={styles.sobre__container} id='sobreMim'>
          <h2 className={styles.sobre__container__titulo}>Sobre mim</h2>
          <p className={styles.sobre__container__apresentacao}>
            Olá, meu nome é Gabriel. Sou um jovem apaixonado por tecnologia e desenvolvimento.
            Sou desenvolvedor Frontend com experiência em React.js, JavaScript, TypeScript, Styled Components e
            consumo de APIs. Estou comprometido em criar interfaces incríveis e integrar dados de forma dinâmica.
            Estou sempre em busca de aprender e me atualizar, acompanhando as últimas tendências
            e melhores práticas no mundo do desenvolvimento. Estou pronto para contribuir para o
            sucesso do seu projeto.
          </p>
          <div className={styles.sobre__container__botoes}>
            <a 
              href='https://www.linkedin.com/in/gabrielcarvalhodev/'
              target='_blank'
              className={styles.sobre__container__botoes__linkedin}
            >
              Linkedin
            </a>
            <a 
              className={styles.sobre__container__botoes__github}
              href="https://github.com/gabrielcarvalhogc" 
              target='_blank'
            >
              Github
            </a>
          </div>
        </div>
      </div>

      <div className={styles.experiencias}>
        <h3 className={styles.experiencias__titulo}>Experiente com</h3>
        <div  className={styles.experiencias__container}>
          <img src={LogoCSS} alt="Logo css" />
          <img src={LogoHTML} alt="Logo HTML" />
          <img src={LogoJavascript} alt="Logo Javascript" />
          <img src={LogoTypescript} alt="Logo Typescript" />
          <img src={LogoReact} alt="Logo React" />
        </div>
      </div>

    </section>
  )
}