import Head from "next/head";
import { Montserrat } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const montserrat = Montserrat({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});

export default function Home() {
  const [billing, setBilling] = useState(false);
  return (
    <>
      <Head>
        <title>Frontend Mentor | Pricing component with toggle</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Made by Loai Esam" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Our Pricing</h1>
          <div>
            <span>Annually</span>
            <label className={styles.switch}>
              <input
                type="checkbox"
                onChange={(e) => setBilling(e.target.checked)}
              />
              <span className={styles.slider}></span>
            </label>
            <span>Monthly</span>
          </div>
        </header>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h2>Basic</h2>
            {billing ? <span>$19.99</span> : <span>$199.99</span>}

            <div className={styles.features}>
              <span>500 GB Storage</span>
              <span>2 Users Allowed</span>
              <span>Send up to 3 GB</span>
            </div>
            <button>Learn More</button>
          </div>

          <div className={styles.card}>
            <h2>Professional</h2>
            {billing ? <span>$24.99</span> : <span>$249.99</span>}
            <div className={styles.features}>
              <span>1 TB Storage</span>
              <span>5 Users Allowed</span>
              <span>Send up to 10 GB</span>
            </div>
            <button>Learn More</button>
          </div>

          <div className={styles.card}>
            <h2>Master</h2>
            {billing ? <span>$39.99</span> : <span>$399.99</span>}
            <div className={styles.features}>
              <span>2 TB Storage</span>
              <span>10 Users Allowed</span>
              <span>Send up to 20 GB</span>
            </div>
            <button>Learn More</button>
          </div>
        </div>
      </main>
    </>
  );
}
