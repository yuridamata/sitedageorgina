import Image from "next/image";

import { useState, useEffect } from "react";

import Logo from "../../public/logoGeorginamin.png";
import styles from "./styles.module.scss";

const menuItems = [
  {
    display: "Sobre Nós",
  },
  {
    display: "Como Funciona",
  },
  {
    display: "Catálogo",
  },
  {
    display: "Contato",
  },
];

const Menu = ({ heroHeight, scrollY }) => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (scrollY > heroHeight) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }, [scrollY]);

  return (
    <nav className={`${styles.menu} ${showMenu ? "" : styles.menuHidden} `}>
      <div className={styles.logoWrapper}>
        <Image src={Logo} width={45} height={45} />
      </div>
      <ul className={styles.menuItens}>
        {menuItems.map((menuItem, index) => {
          return (
            <li key={`menu-item-${index}`} className={styles.menuItem}>
              {menuItem.display}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
