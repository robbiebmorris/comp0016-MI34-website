import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        MI Bluetooth Controller was designed with ease of use in mind. It's simple,
        yet effectice UI is designed to be accessible for everyone.
      </>
    ),
  },
  {
    title: 'Powered by Motion Input',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        MI Bluetooth Controller uses UCL's Motion Input technology brought
        exclusively to Android. Control your device using your movements alone.
      </>
    ),
  },
  {
    title: 'Seamless across Platforms',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Designed to operate on various platforms, including Windows, MacOS, iPadOS,
        Android and AndroidTV. Easily connect without any additional 
        software.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
          {FeatureList.map((props, idx) => (
            <React.Fragment key={idx}>
              {props.Svg ? (
                // Render existing features
                <Feature {...props} />
              ) : (
                // Render new hardcoded image with description
                props.component
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
