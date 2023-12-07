import AboutMe from "../../components/AboutMe";
import Apresentacao from "../../components/Introduction";
import Projects from "../../components/Projects";
import styles from './HomePage.module.scss';

export default function HomePage() {
  return (
    <main className={styles.homePage}>
      <Apresentacao />
      <AboutMe />
      <Projects />
    </main>
  )
}