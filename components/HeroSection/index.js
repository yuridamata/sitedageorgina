import styles from "./styles.module.scss";
import Logo from "../../public/logoGeorgina.png";
import Image from "next/image";

const HeroSection = ({ heroHeight }) => {
  return (
    // minHeight is defined here because it's necessary on Menu behaviour
    <div className={styles.heroSection} style={{ minHeight: heroHeight }}>
      <div className={styles.content}>
        <div>
          <Image src={"/logoGeorgina.png"} width={654} height={340} />
        </div>
      </div>
      <div className={styles.callToAction}>
        <a>
          <p>Nos conheça</p>
          <p className={styles.arrow}> &#x27A4; </p>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
