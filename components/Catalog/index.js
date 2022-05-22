import { forwardRef } from "react";
import styles from "./styles.module.scss";

const Catalog = (props, ref) => {
  const categories = [
    {
      title: "Kits Promocionais",
      img: "/categories/kitsPromocionais.png",
    },
    {
      title: "Mobília",
      img: "/categories/mobilia.png",
    },
    {
      title: "Peças Individuais",
      img: "/categories/pecasIndividuais.png",
    },
    {
      title: "Temas",
      img: "/categories/temas.png",
    },
  ];

  return (
    <section ref={ref} className={styles.catalog}>
      <h1>Catálogo</h1>
      <div className={styles.categories}>
        {categories.map((category, index) => {
          return (
            <div key={`catalog-${index}`} className={styles.category}>
              <div className={styles.titleWrapper}>
                <h2>{category.title}</h2>
              </div>
              <div className={styles.imgCategory} />
              {/* <img src={category.img} /> */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default forwardRef(Catalog);
