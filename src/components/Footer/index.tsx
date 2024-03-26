import styles from './Footer.module.scss';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <footer className={styles.rodape} id='contato'>
      <div className={styles.container}>
        <ContactPhoneIcon fontSize='large'/>
        <p className={styles.info}>+55 (61) 99401 2764</p>
      </div>

      <div className={styles.container}>
        <EmailIcon fontSize='large'/>
        <p className={styles.info}>gabriel225gc@gmail.com</p>
      </div>
      <a
        className={styles.container}
        href='https://www.linkedin.com/in/gabrielcarvalhodev/'
        target='_blank'
      >
        <LinkedInIcon fontSize='large'/>
        <p className={styles.info}>Gabriel Carvalho</p>
      </a>
    </footer>
  )
}
