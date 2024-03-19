import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.scss';
import { faLink, faUniversity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Image } from 'react-bootstrap';

function HomepageHeader({ sliderContent, sliderCounter }) {
  const { siteConfig } = useDocusaurusContext();

  return (
      <div className={styles.header}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h2>MotionInput 3.4</h2>
            <h1>Mobile Bluetooth </h1>
            <h1 className={styles.gradientText}>Controller.</h1>
            <h3>{siteConfig.tagline}</h3>
          </div>
          <div className={styles.heroLogo}>
            <div className={styles.logoCenterer}>
              <div className={styles.logo}></div>
            </div>
          </div>
        </div>
      </div>
  )

}

function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
        <HomepageHeader/>
        <HomepageFeatures/>
    </Layout>
  );
}

export default Home;
