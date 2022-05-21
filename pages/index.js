import { useState, useEffect } from "react";
import Head from "next/head";
import Loading from "../components/Loading";
import styles from "./indexStyles.module.scss";
import Menu from "../components/Menu";

const heroHeight = 300;

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div className={loading === true ? styles.loadingMain : styles.main}>
      <Head>
        <title>Site da Georgina</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Loading loading={loading} />
      <main>
        <Menu scrollY={scrollY} heroHeight={heroHeight} />        
      </main>

      <footer>Footer</footer>
    </div>
  );
}
