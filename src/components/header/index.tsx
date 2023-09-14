import Logo from '/logo-gc.png';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <img 
        src={Logo} 
        alt="logo na cor branca escrito gc entre o sinal de maior que e menor que com barra no final" 
        className={styles.header__logo}
      />

      <nav className={styles.container}>
        <ul className={styles.container__lista}>
          <li className={styles.container__item}>
            <a href="#sobreMim" className={styles.container__link} >Sobre mim</a>
          </li>
          <li className={styles.container__item}>
            <a href="#projetos" className={styles.container__link}>Projetos</a>
          </li>
          <li className={styles.container__item}>
            <a href="#contato" className={styles.container__link}>Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}