import styles from './Apresentacao.module.scss';

export default function Apresentacao() {
  return (
    <section className={styles.secao}>
      <div className={styles.descricao}>
        <h1 className={styles.descricao__titulo}>Olá eu sou um Desenvolvedor Front-end</h1>
        <p className={styles.descricao__textos}>Meu nome é</p>
        <p className={styles.descricao__textos}>Gabriel Carvalho</p>
      </div>

      <div className={styles.sobre}></div>

      <div className={styles.experiencias}></div>

    </section>
  )
}