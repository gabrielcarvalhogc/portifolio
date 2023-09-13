import logoTelefone from '/info/logo-telefone.png';
import logoGmail from '/info/logo-gmail.png';
import logoLinkedin from '/info/logo-linkedin.png';
import styles from './Footer.module.scss';
import { useState } from 'react';

export default function Footer() {
  const [copiaTelefone, setCopiaTelefone] = useState(false);
  const [copiaEmail, setCopiaEmail] = useState(false);
  const email = "gabriel225gc@gmail.com";
  const celular = "+55 (61) 99401 2764";

  const copyToClipboard = async (
    text: string,
    setCopiado: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 1500);
    } catch (error) {
      alert('Não foi possível copiar o texto para a área de transferência.');
    }
  };

  return (
    <footer className={styles.rodape}>

      <div className={styles.rodape__container} onClick={() => copyToClipboard(celular, setCopiaTelefone)}>
        <img 
          className={styles.rodape__container__img} 
          src={logoTelefone} 
          alt="Icone de telefone" 
        />
        <p className={styles.rodape__container__info}>
          {!copiaTelefone ? celular : "Copiado"}
        </p>
      </div>

      <div className={styles.rodape__container} 
      onClick={() => copyToClipboard(email, setCopiaEmail)}>
        <img 
          className={styles.rodape__container__img} 
          src={logoGmail} 
          alt="Icone do e-mail" 
        />
        <p className={styles.rodape__container__info}>
          {!copiaEmail ? email : "Copiado"}
        </p>
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
