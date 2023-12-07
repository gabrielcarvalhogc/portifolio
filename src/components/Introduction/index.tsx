import styles from './Introduction.module.scss';
import MinhaFoto from '/minha-foto.jpeg';

export default function Introduction() {
  return (
    <div className={styles.introduction}>
      <img
        className={styles.introduction__image}
        src={MinhaFoto}
        alt="Um menino com cabelo curto e cacheado com camiseta preta e uma parede branca de fundo"
      />
      <div className={styles.introduction__container}>
        <p>Olá, me chamo</p>
        <p>Gabriel Carvalho👋</p>
        <span>Desenvolvedor Frontend</span>
      </div>
    </div>
  )
}