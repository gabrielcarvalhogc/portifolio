import imagemCodechella from '/projeto-codechella-r.png';
import imagemCardapio from '/projeto-restaurante-r.png';
import styles from './Projetos.module.scss';


export default function Projetos() {
  return (
    <section className={styles.secao}>
      <h2 className={styles.secao__titulo}>Projetos</h2>

      <div className={styles.projeto}>
        <img 
          src={imagemCodechella} 
          alt="Festival de música codechella" 
          className={styles.projeto__img}
        />

        <div className={styles.projeto__container}>
          <h3 className={styles.projeto__container__titulo}>Codechella</h3>

          <p className={styles.projeto__container__descricao}>O Codechella é um projeto que combina paixões como música, linguagens de programação e tecnologia. Neste festival virtual, você encontrará uma variedade de artistas e referências, criando uma experiência diversificada e divertida para os amantes da música e da tecnologia.</p>

          <button className={styles.projeto__container__botao}>Ver mais</button>
        </div>
      </div>

      <div className={styles.projeto}>
        <img 
          src={imagemCardapio} 
          alt="Restaurante casa da massa" 
          className={styles.projeto__img}
        />
        <div className={styles.projeto__container}>
          <h3 className={styles.projeto__container__titulo}>Casa da massa</h3>

          <p className={styles.projeto__container__descricao}>Bem-vindo ao Casa da massa, o seu refúgio gastronômico para uma autêntica experiência italiana. Situado em um charmoso e acolhedor ambiente, nosso restaurante é um pedaço da Itália no coração da cidade.</p>

          <button className={styles.projeto__container__botao}>Ver mais</button>
        </div>
      </div>
    </section>
  )
}