import Image from "next/image";

import { useState, useEffect } from "react";

import Logo from "../../public/logoGeorginamin.png";
import styles from "./styles.module.scss";

const Menu = ({ showMenuOn, refs, scrollFunc }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const menuItems = [
    {
      display: "Sobre Nós",
      ref: refs.aboutUsRef,
    },
    {
      display: "Como Funciona",
      ref: refs.howItWorksRef,
    },
    {
      display: "Catálogo",
      ref: refs.catalogRef,
    },
    {
      display: "Contato",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY >= showMenuOn) {
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
            <li
              key={`menu-item-${index}`}
              className={styles.menuItem}
              onClick={() => {
                console.log("menuItem");
                console.log(menuItem.ref);
                if (menuItem.ref) {
                  scrollFunc(menuItem.ref);
                }
              }}
            >
              {menuItem.display}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
