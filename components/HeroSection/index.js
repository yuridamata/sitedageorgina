import styles from "./styles.module.scss";
import Logo from "../../public/logoGeorgina.png";
import Image from "next/image";

const HeroSection = ({ scrollToAboutUs }) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <img src={"/logoGeorgina.png"} />
      </div>
      <div className={styles.callToAction}>
        <a onClick={() => scrollToAboutUs()}>
          <p>Nos conheça</p>
          <p className={styles.arrow}> &#x27A4; </p>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
