import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <section className={styles.aboutMe} id="sobreMim">
      <div>
        <h2>Sobre mim</h2>
        <p>
          Olá, sou o Gabriel, um entusiasta da tecnologia e apaixonado pelo universo do desenvolvimento.
          Meu compromisso é criar interfaces que transcendam o convencional, combinando design intuitivo com funcionalidade dinâmica.
          Estudante de Análise e desenvolvimento de sistemas,Sou uma pessoa que adora desafios, assim como todo desenvolvedor, mas em especial aqueles que me tiram da minha zona de conforto, pois as minhas maiores evoluções e aprendizados vieram de momentos em que me vi obrigado a sair dela e enfrentar a vida.
          Minha paixão por tecnologia se reflete na minha dedicação em desenvolver soluções que impactam positivamente a experiência do usuário.
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