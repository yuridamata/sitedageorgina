import styles from "./styles.module.scss";
import Logo from "../../public/logoGeorgina.png";
import Image from "next/image";

const HeroSection = ({ scrollToAboutUs }) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <div>
          <Image src={"/logoGeorgina.png"} width={654} height={340} />
        </div>
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
