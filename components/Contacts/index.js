import { forwardRef, useState } from "react";
import styles from "./styles.module.scss";

const Contacts = (props, ref) => {
  return (
    <footer className={styles.contacts} ref={ref}>
      <h1>Contatos</h1>
      <div className={styles.contactsBlocksWrapper}>
        <div className={styles.contactsBlock}>
          <div className={styles.contactElement}>
            <img src={"/icons/phone.svg"} />
            <a href="tel:61994356776">(61) 99435-6776</a>
          </div>
          <div className={`${styles.contactElement} ${styles.email}`}>
            <img src={"/icons/mail.svg"} />
            <a href="mailto:emaildageorgina@gmail.com" target={"_blank"} rel="noreferrer">
              emaildageorgina@gmail.com
            </a>
          </div>

          <div className={styles.contactElement}>
            <img src={"/icons/map.svg"} />
            <a href="https://goo.gl/maps/HAwZQdegMT48W8hT7" target={"_blank"} rel="noreferrer">
              CLN 405, Bloco D Loja 52{" "}
            </a>
          </div>
        </div>

        <div className={styles.contactsBlock}>
          <div className={styles.contactElement}>
            <img src={"/icons/whatsapp.svg"} />
            <a href="https://wa.me/556194356776" target={"_blank"} rel="noreferrer">Converse conosco</a>
          </div>
          <div className={styles.contactElement}>
            <img src={"/icons/instagram.svg"} />
            <a
              href="https://www.instagram.com/instadageorgina/"
              target={"_blank"}
              rel="noreferrer"
            >
              Nos siga no Instagram
            </a>
          </div>
          <div className={styles.contactElement}>
            <img src={"/icons/mapMark.svg"} />
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://ul.waze.com/ul?place=ChIJOzego6E7WpMRNOJUar4m2r8&ll=-15.77300930%2C-47.87615910&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
            >
              Vá até a Georgina
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default forwardRef(Contacts);
