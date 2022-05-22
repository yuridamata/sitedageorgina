import styles from "./styles.module.scss";

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.ourHistory}>
        <h1>Sobre Nós</h1>
        <div className={styles.txtBox}>
          <p>
            Sejam todos bem vindos à Georgina! Meu nome é Hadassa e o que
            precisam saber de mim é: Sou cristã, mineira de Belo Horizonte e amo
            viajar e curtir todos os momentos bons da vida. Acredito ser
            importante comemorar todos os momentos e torná-los marcantes de
            alguma maneira.
          </p>
          <p>
            Para todos que amam tornar seu momentos especiais ainda mais
            especiais, venham conhecer nosso espaço que vamos atendê-los com
            todo o amor e carinho que você merece!
          </p>
          <p>O nome do nosso espaço é uma homenagem à minha vozinha...</p>
        </div>
      </div>
      <div className={styles.composition}>
        <div className={styles.squareElement}>
          <img
            className={styles.storeFront}
            src="/compositionAboutUs/storeFront.png"
          />
          <img className={styles.couple} src="/compositionAboutUs/couple.png" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
