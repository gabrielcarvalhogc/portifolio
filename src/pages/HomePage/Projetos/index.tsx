import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import projectsData from './cards.json'; // Importe os dados do arquivo JSON

import styles from './Projetos.module.scss'; // Certifique-se de importar seus estilos

interface Project {
  id: number;
  img: string;
  titulo: string;
  descricao: string;
}

const Projetos: React.FC = () => {
  const [showCard, setShowCard] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const controls = useAnimation();

  const toggleCard = (item: Project) => {
    setSelectedProject(item);
    setShowCard(!showCard);

    // Animação do card usando framer-motion
    controls.start({
      opacity: showCard ? 0 : 1,
      scale: showCard ? 0 : 1,
    });
  };

  const cards: Project[] = projectsData; // Use os dados do arquivo JSON

  return (
    <section className={styles.secao}>
      <h2 className={styles.secao__titulo}>Projetos</h2>

      {cards.map((item: Project) => (
        <div className={styles.projeto} key={item.id}>
          <img
            src={item.img}
            alt={item.titulo}
            className={styles.projeto__img}
          />

          <div className={styles.projeto__container}>
            <h3 className={styles.projeto__container__titulo}>{item.titulo}</h3>

            <p className={styles.projeto__container__descricao}>{item.descricao}</p>

            <button
              className={styles.projeto__container__botao}
              onClick={() => toggleCard(item)}
            >
              Ver mais
            </button>
          </div>
        </div>
      ))}

      {showCard && selectedProject && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={controls}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          className={`${styles.card} ${styles.cardVisible}`} // Adicione a classe cardVisible para mostrar o card
        >
          <h2>{selectedProject.titulo}</h2>
          <p>{selectedProject.descricao}</p>
        </motion.div>
      )}
    </section>
  );
};

export default Projetos;
