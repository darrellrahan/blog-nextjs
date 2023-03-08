import Date from "@/components/date";
import Layout from "@/components/layout";
import { getAllPostIds, getPostData } from "@/lib/posts";
import Head from "next/head";
import styles from "../../styles/Post.module.css";
import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <section className={styles.fColumn}>
        <h1 className={styles.bigHeading}>{postData.title}</h1>
        <p className="date">
          <Date dateString={postData.date} />
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          className={styles.fColumn}
        />
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
