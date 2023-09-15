import { useState } from 'react';
import { motion } from 'framer-motion';
import cards from './cards.json';
import styles from './Projetos.module.scss';

interface Card {
  id: number;
  img: string;
  titulo: string;
  descricao: string;
  detalhe: string;
  recursos: {
    tecnologia: string;
    outros: string;
  };
  botoes: {
    projeto: string;
    codigo: string;
  };
}

const Projetos = () => {
  const [cardStates, setCardStates] = useState<{ [key: number]: boolean }>({});

  const toggleCard = (id: number) => {
    setCardStates((prevCardStates) => ({
      ...prevCardStates,
      [id]: !prevCardStates[id],
    }));
  };

  return (
    <section className={styles.secao} id='projetos'>
      <h2 className={styles.secao__titulo}>Projetos</h2>

      {cards.map((item: Card) => (
        <motion.div
          className={styles.card}
          key={item.id}
          onClick={() => toggleCard(item.id)}
          layout="size"
          transition={{ duration: .6, type: "spring" }}
        >
          <motion.img src={item.img} alt={item.titulo} className={styles.card__img} layout/>

          <div className={styles.card__container}>
            <h3 className={styles.card__container__titulo}>{item.titulo}</h3>

            <p className={styles.card__container__descricao}>{item.descricao}</p>



            {cardStates[item.id] && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className={styles.card__info}
              >
                <p className={styles.card__info__paragrafo}>{item.detalhe}</p>
                <p className={styles.card__info__paragrafo}>{item.recursos.tecnologia}</p>
                <p className={styles.card__info__paragrafo}>{item.recursos.outros}</p>
                <div className={styles.card__info__links}>
                  <a href={item.botoes.projeto} target='_blank'>Ver Projeto</a>
                  <a href={item.botoes.codigo} target='_blank'>Ver código</a>
                </div>
              </motion.div>
            )}
            {!cardStates[item.id] &&(
              <p className={styles.card__container__verMais}>Clique no card para Ver mais</p>
            )
            }

          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Projetos;
