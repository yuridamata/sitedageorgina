import { forwardRef } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const HowItWorks = (props, ref) => {
  const instructions = [
    {
      title: "Pegue e monte",
      image: "/instructions/imgPegueMonte.png",
      text: [
        "Optamos por essa opção para que o cliente monte a sua própria decoração com aquele toque especial.",
        "É uma forma mais prática de realizar seu evento utilizando nossas peças de acordo com o tema escolhido",
        "É possível realizar uma prévia em loja da forma que o cliente deseja.",
      ],
    },
    {
      title: "Balões",
      image: "/instructions/imgBaloes.png",
      text: [
        "Para deixar a sua festa ainda mais linda, trabalhamos com parcerias no fornecimento de Balões para completar a sua decoração.",
        "Após montar a sua decoração, nós damos todo os suporte para deixar sua festa ainda mais linda.",
      ],
    },
    {
      title: "Frete e Retirada",
      image: "/instructions/imgFreteRetirada.png",
      text: [
        "Não realizamos a montagem e entrega. Quando houver necessidade de frete, deve ser solicitado antes, o serviço a parte ou um frete terceirizado.",
        "A retirada das peças é realizada um dia antes do evento e a devolução no dia seguinte, se o evento for aos sábados, a devolução é realizada na segunda-feira.",
      ],
    },
  ];

  return (
    <section className={styles.howItWorks} ref={ref}>
      <h1>Como Funciona</h1>
      {instructions.map((instruction, index) => {
        return (
          <div
            key={`instruction-${index}`}
            className={`${styles.instruction}  ${
              index % 2 === 0 ? styles.even : styles.odd
            }`}
          >
            <div
              className={`${styles.textInstructionWrapper} ${
                index % 2 === 0 ? styles.even : styles.odd
              }`}
            >
              <h2>{instruction.title}</h2>
              <div className={styles.txt}>
                {instruction.text.map((paragraph, index) => {
                  return (
                    <p key={`instruction-paragraph-${index}`}>{paragraph}</p>
                  );
                })}
              </div>
            </div>
            <div className={styles.imgInstructionWrapper}>
              <div className={styles.composition}>
                <div className={styles.compositionElementLeft} />
                <div className={styles.compositionElementRight} />
                <img src={instruction.image} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default forwardRef(HowItWorks);
