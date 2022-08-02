import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Built for Performance',
    Svg: require('../../static/img/undraw_data_reports_cicada.svg').default,
    description: (
      <>
        Cicada was designed to create tests that simulate a virtually unlimited
        number of users without significant bottlenecks.
      </>
    ),
  },
  {
    title: 'Not Just an HTTP Load Testing Tool',
    Svg: require('../../static/img/undraw_code_review_cicada.svg').default,
    description: (
      <>
        Cicada was designed to test distributed systems that weren't just API's.
        You can add any Python library of your choice to take advantage of
        Cicada's robust and clean interface for managing virtual users.
      </>
    ),
  },
  {
    title: 'Automate your Builds',
    Svg: require('../../static/img/undraw_smart_home_cicada.svg').default,
    description: (
      <>
        Cicada fits in nicely with CI/CD pipelines and can be used to painlessly
        add automated integration testing for your services.
      </>
    ),
  },
  {
    title: 'Written in Python',
    Svg: require('../../static/img/undraw_programming_cicada.svg').default,
    description: (
      <>
        Cicada tests and all their necessary machinery are written in Python and
        resemble familiar unit testing tools like Pytest. This makes Cicada very
        flexible and easy to use when simulating any situation.
      </>
    ),
  },
  {
    title: 'Runs in Containers',
    Svg: require('../../static/img/undraw_container_ship.svg').default,
    description: (
      <>
        Cicada is designed to be easy to run locally or across many nodes by
        packaging it inside of containers. This allows tests to go from your
        machine to the Cloud with ease.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <Feature key={0} {...FeatureList[0]} />
          <Feature key={1} {...FeatureList[1]} />
          <Feature key={2} {...FeatureList[2]} />
        </div>
        <div className="row">
          <Feature key={3} {...FeatureList[3]} />
          <Feature key={4} {...FeatureList[4]} />
        </div>
      </div>
    </section>
  );
}
