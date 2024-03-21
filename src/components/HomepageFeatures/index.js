import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Card, Fade } from 'react-bootstrap';
import testImage from "../../../static/img/homepage/test_image.png";
import ganttChartImage from "../../../static/img/homepage/gantt.png";
import FadeInOnScroll from '../FadeInOnScroll';
import ShrinkOnScroll from '../ShrinkOnScroll';
import React from 'react';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/homepage/legacymilogo.svg').default,
    description: (
      <>
        MI Bluetooth Controller was designed with ease of use in mind. It's simple,
        yet effectice UI is designed to be accessible for everyone.
      </>
    ),
  },
  {
    title: 'Powered by Motion Input',
    Svg: require('@site/static/img/homepage/milogo.svg').default,
    description: (
      <>
        MI Bluetooth Controller uses UCL's MotionInput technology brought
        exclusively to Android. Control your device using your movements alone.
      </>
    ),
  },
  {
    title: 'Seamless across Platforms',
    Svg: require('@site/static/img/homepage/gamepadmilogo.svg').default,
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
      <div className={"text--center"}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md featureText">
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
  As a part of the MotionInput for Android, our team focused on implementing Bluetooth connectivity and building the supporting app while also laying the foundations for further development. 
  The architecture is designed to be developer friendly, allowing future developers to extend the existing components but also add their own components as MotionInput for Android becomes more developed.
  `
}

function CenteredContent({ title, text }) {
  return (
    <div className={`${styles.centeredContent} ${styles.background}`}>
      <h2>{title}</h2>
      <div className={styles.textContent} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}

function ProjectVideo({ title, videoId }) {
  return (
        <div className={styles.centeredContent}>
            <h2>{title}</h2>
            <div className={styles.videoContainer}>
                <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className={styles.embeddedVideo}
                ></iframe>
            </div>
        </div>
  );
}

const team_members = {
  hugh: "Hugh Stanway",
  robbie: "Robbie Morris",
  ulk: "Ulk Gerguri",
}

const team_members_abstract = {
  hugh: `
  Roles: Client liaison, Programmer, Tester
  `,
  robbie: `
  Roles: Report editor, UI Designer, Researcher
  `,
  ulk: `
  Roles: Programmer, UI Designer, Tester
  `
}

const team_member_links = {
    hugh: {"linkedIn": "?",
            "github": "?"},
    robbie: {"linkedIn": "?",
            "github": "?"},
    ulk: {"linkedIn": "?",
            "github": "?"},
}

function TeamMemberCard({ member }) {
  return (
    <div className={styles.teamMemberCard}>
      <Card style={{ width: '18rem', padding: '2rem' }}>
        <Card.Img variant="top" src={testImage} rounded />
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.cardTitle}>
          {team_members[member]}
                <Card.Link href={team_member_links[member].github}><FontAwesomeIcon icon={faGithub} className={styles.icon} /></Card.Link>
                <Card.Link href={team_member_links[member].linkedIn}><FontAwesomeIcon icon={faLinkedin} className={styles.icon} /></Card.Link>
          </Card.Title>
          <Card.Text className={styles.cardText}>{team_members_abstract[member]}</Card.Text>
          </Card.Body>
      </Card>
    </div>
  );
}

const gantt = {
  body: `
  We used a Gantt chart to track progress throughout the couse of the project.
  `,
}

function GanttChart({ title, text }) {
  return (
    <div className={styles.centeredContent}>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: text }} />
      <img src={ganttChartImage} alt={ganttChartImage} className={styles.ganttImage}/>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <FadeInOnScroll><ShrinkOnScroll>
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
        </ShrinkOnScroll></FadeInOnScroll>

        <div className={styles.spacing}></div>

        <FadeInOnScroll><ShrinkOnScroll>
            <div className={`${styles.backgroundWrapper}`}>
                <div className={`abstractContainer`}>
                    <CenteredContent
                    title="Project Abstract"
                    text={abstract.abstract}
                    />
                </div>
            </div>
        </ShrinkOnScroll></FadeInOnScroll>

        <div className={styles.spacing}></div>
        
        <FadeInOnScroll><ShrinkOnScroll>
        <div>
          <ProjectVideo
            title="Project Video"
            videoId="jtKWr7FQ-bo"
          />
        </div>
        </ShrinkOnScroll></FadeInOnScroll>

        <div className={styles.spacing}></div>
        
        <FadeInOnScroll><ShrinkOnScroll>
        <div className={styles.backgroundWrapper}>
          <div className="container">
            <h2 className={styles.teamMembersTitle}>Meet The Team</h2>
            <div className={`row ${styles.teamMembersContainer}`}>
              <TeamMemberCard member="hugh" />
              <TeamMemberCard member="robbie" />
              <TeamMemberCard member="ulk" />
            </div>
          </div>
        </div>
        </ShrinkOnScroll></FadeInOnScroll>


        <div className={styles.spacing}></div>

        <FadeInOnScroll><ShrinkOnScroll>
        <div>
            <GanttChart
              title="Project Timeline"
              text={gantt.body}
            />
        </div>
        </ShrinkOnScroll></FadeInOnScroll>

        <div className={styles.spacing}></div>
      </div>
    </section>
  );
}