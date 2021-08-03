import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} is Watching U`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main
        style={{
          display: "flex",
          padding: "4rem 12rem",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img
          style={{ borderRadius: "50%" }}
          width={180}
          height={250}
          src={"https://cdn.lrvinye.cn/blog/avatar.jpg"}
        ></img>

        <p style={{fontFamily:'serif',fontStyle:'italic',fontSize:'1.3rem'}}>
          Nobody can go back and start a new beginning, but anyone can start
          today and make a new ending. __
        </p>
      </main>
    </Layout>
  );
}
