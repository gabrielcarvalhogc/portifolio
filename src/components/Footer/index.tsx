import logoTelefone from '/info/logo-telefone.png';
import logoGmail from '/info/logo-gmail.png';
import logoLinkedin from '/info/logo-linkedin.png';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.rodape} id='contato'>
      <div className={styles.rodape__container}>
        <img 
          className={styles.rodape__container__img} 
          src={logoTelefone} 
          alt="Icone de telefone" 
        />
        <p className={styles.rodape__container__info}>+55 (61) 99401 2764</p>
      </div>

      <div className={styles.rodape__container}>
        <img 
          className={styles.rodape__container__img} 
          src={logoGmail} 
          alt="Icone do e-mail" 
        />
        <p className={styles.rodape__container__info}>gabriel225gc@gmail.com</p>
      </div>
      <a
        className={styles.rodape__container}
        href='https://www.linkedin.com/in/gabrielcarvalhodev/'
        target='_blank'
      >
        <img 
          className={styles.rodape__container__img} 
          src={logoLinkedin} 
          alt="Icone do LinkedIn" 
        />
        <p className={styles.rodape__container__info}>LinkedIn</p>
      </a>
    </footer>
  )
}
