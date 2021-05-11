import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--4 col--offset-1">
            <div className="row">
              <div className="col">
                <h1 className="hero__title">{siteConfig.tagline}</h1>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col" style={{padding: "1em"}}>
                <a
                  className="button button--lg button--primary shadow--tl"
                  href="/cicada-distributed/docs/introduction/installation"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className="col col--5 col--offset-1">
            <img src="/cicada-distributed/img/splash-terminal.svg"></img>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
