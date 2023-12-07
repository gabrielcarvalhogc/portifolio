import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <section className={styles.aboutMe} id="sobreMim">
      <div>
        <h2>Sobre mim</h2>
        <p>
          Olá, sou o Gabriel, um entusiasta da tecnologia e apaixonado pelo universo do desenvolvimento. Especializado como desenvolvedor Frontend, possuo expertise em React.js, JavaScript, TypeScript, Nextjs, SASS e styled components, além de habilidades sólidas em integração de APIs.
          Meu compromisso é criar interfaces que transcendam o convencional, combinando design intuitivo com funcionalidade dinâmica. Estou constantemente imerso no aprendizado, buscando atualizações e seguindo as últimas tendências e melhores práticas no mundo do desenvolvimento.
          Sempre determinado a contribuir com meu conhecimento e habilidades para o sucesso dos projetos. Minha paixão por tecnologia se reflete na minha dedicação em desenvolver soluções que impactam positivamente a experiência do usuário.
        </p>
        <div className={styles.container__links}>
          <a
            href='https://www.linkedin.com/in/gabrielcarvalhodev/'
            target='_blank'
            className={styles.container__links__linkedin}
          >
            Linkedin
          </a>
          <a
            className={styles.container__links__github}
            href="https://github.com/gabrielcarvalhogc"
            target='_blank'
          >
            Github
          </a>
        </div>
      </div>
    </section>
  )
}