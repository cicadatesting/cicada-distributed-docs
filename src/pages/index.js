import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
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
            <br />
            <div className="row">
              <div className="col" style={{ padding: "1em" }}>
                <a
                  className="button button--lg button--primary shadow--tl"
                  href="/cicada-distributed-docs/docs/introduction/installation"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className="col col--5 col--offset-1">
            <img src="/cicada-distributed-docs/img/splash-terminal.svg"></img>
          </div>
        </div>
      </div>
    </header>
  );
}

function NewsletterSignUp() {
  const [email, setEmail] = useState("");

  return (
    <section>
      <div className="container">
        <form
          action="https://github.us6.list-manage.com/subscribe/post?u=8cdf2cddf5d4ed909e47188bf&amp;id=311e0be3b5"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
        >
          <div className="row">
            <div className="col" style={{ textAlign: "center" }}>
              <h1>
                <label htmlFor="mcd-EMAIL">
                  Sign up for our newsletter
              </label>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col col--2 col--offset-4" style={{ padding: "1em", textAlign: "center" }}>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                name="EMAIL"
                id="mce-EMAIL"
                placeholder="email address"
                required
              />
            </div>
            <div className="col col--2" style={{ padding: "1em", textAlign: "center" }}>
              <input
                className="button button--primary shadow--tl"
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <NewsletterSignUp />
      </main>
    </Layout>
  );
}
