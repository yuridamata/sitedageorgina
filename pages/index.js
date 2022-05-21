import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Loading from "../components/Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Head>
        <title>Site da Georgina</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Bem vindo ao site da georgina</h1>
      </main>

      <footer>Footer</footer>
    </div>
  );
}