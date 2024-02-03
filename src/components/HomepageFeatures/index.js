import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';
import { Card } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

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
        MI Bluetooth Controller uses UCL's MotionInput technology brought
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

const abstract = {
  abstract: `
  Currently available forms of interaction with computers and technology is not always accessible to everyone. For example, current patients in hospitals are foreced into using small and impractical TV sets 
  for entertainment which come with hard to use controls. For patients are less mobile, this is nearly impossible to use.
  <br/><br/>
  With a MotionInput Bluetooth controller setup, patients could control a TV on the wall hands free with eye gaze, facial movements, or any of the other options MotionInput provides,
  leading to a considerably more comfortable viewing experience. Our solution allows users to replace their mouse and keyboard with any android device and supports a large range of devices users may have.
  <br/><br/>
  As a part of the MotionInput for Android, our team focused on implementing Bluetooth connectivity and building the supporting app while also laying the foundations for further development in this area
  for MotionInput. The architecture is designed to be developer friendly, allowing future developers to extend the existing components but also add their own components as MotionInput for Android becomes more developed.
  `
}

function CenteredContent({ title, text }) {
  return (
    <div className={styles.centeredContent}>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px300" />
      <Card.Body>
        <Card.Title>Hugh Stanway</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
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
                <Feature {...props} />
              ) : (
                props.component
              )}
            </React.Fragment>
          ))}
        </div>
        <div>
          <CenteredContent
            title="Project Abstract"
            text={abstract.abstract}
          />
        </div>
        <div>
          <BasicExample/>
        </div>
      </div>
    </section>
  );
}
