import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout";
import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import Date from "@/components/date";
import React from "react";
import { GetStaticProps } from "next";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout isHome>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={`${styles.fColumn} ${styles.largeGap}`}>
        <div className={`${styles.fColumn} ${styles.mediumGap}`}>
          <p className={styles.paragraph}>
            Hello, I'm <strong>Darrell</strong>. I'm a junior frontend
            developer. I've built over 50 web projects which you can see on my{" "}
            <Link
              href="https://github.com/darrellrahan?tab=repositories"
              className="link"
              target="_blank"
            >
              Github
            </Link>
            .
          </p>
          <p className={styles.paragraph}>
            This is a simple blog website that I built in order to learn{" "}
            <Link href="https://nextjs.org" className="link" target="_blank">
              Next.js.
            </Link>
          </p>
        </div>
        <div className={`${styles.fColumn} ${styles.mediumGap}`}>
          <h1 className={styles.bigHeading}>Blog</h1>
          {allPostsData.map((post) => (
            <div key={post.id}>
              <p className={styles.paragraph}>
                <Link href={`/posts/${post.id}`} className="link">
                  {post.title}
                </Link>
              </p>
              <p className={`${styles.paragraph} date`}>
                <Date dateString={post.date} />
              </p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
