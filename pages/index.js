import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Loading from "../components/Loading";
import styles from "./indexStyles.module.scss";
import Menu from "../components/Menu";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Divider from "../components/Divider";

const heroHeight = 700;

export default function Home() {
  const [loading, setLoading] = useState(true);

  const aboutUsRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  };

  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading]);

  return (
    <div className={loading === true ? styles.loadingMain : styles.main}>
      <Head>
        <title>Site da Georgina</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Loading loading={loading} />
      <main>
        <Menu
          showMenuOn={heroHeight / 3}
          refs={{
            aboutUsRef,
          }}
          scrollFunc={scrollToRef}
        />
        <HeroSection
          scrollToAboutUs={() => {
            scrollToRef(aboutUsRef);
          }}
        />
        <AboutUs ref={aboutUsRef} />
        <Divider />
      </main>

      <footer>Footer</footer>
    </div>
  );
}
