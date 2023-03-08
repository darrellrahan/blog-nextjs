import styles from "../styles/Layout.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Layout({
  children,
  isHome,
}: {
  children: React.ReactNode;
  isHome?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Simple blog website using Next js" />
      </Head>
      <header className={styles.header}>
        {isHome ? (
          <>
            <Image
              priority={true}
              src="/images/profile.jpeg"
              alt="profile"
              width="144"
              height="144"
            />
            <h1 className={styles.homeHeading}>Darrell Rafa</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority={true}
                src="/images/profile.jpeg"
                alt="profile"
                width="108"
                height="108"
              />
            </Link>
            <Link href="/">
              <h3 className={styles.notHomeHeading}>Darrell Rafa</h3>
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
      {!isHome && (
        <footer>
          <Link href="/" className={styles.link}>
            ← Back to home
          </Link>
        </footer>
      )}
    </div>
  );
}
