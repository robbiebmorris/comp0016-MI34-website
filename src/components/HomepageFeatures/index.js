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
import TeamMemberCard from '../TeamMemberCard';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/homepage/legacymilogo.svg').default,
    description: (
      <>
        MI Bluetooth Controller was designed with ease of use in mind. Its simple
        yet effectice UI is made to be accessible for everyone.
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
        Designed to operate on platforms including Windows, MacOS, iPadOS,
        Android and AndroidTV. Easily connect without additional software.
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
  In today's technology-driven world, accessibility to digital tools and devices is increasingly crucial. However, many individuals, particularly those with disabilities or confined to hospital settings, face significant challenges in harnessing the benefits of modern technology due to limitations in motor control. Simple activities like operating a TV can become arduous tasks for them, highlighting the pressing need for innovative solutions.
  <br/><br/>
  Our team developed a solution to this problem that would empower disabled individuals and hospital patients to interact with technology seamlessly. Through MotionInput for Android, we devised a versatile Bluetooth controller setup that enables users to control a TV or any Bluetooth-enabled device hands-free, utilizing a variety of input methods such as eye gaze, facial movements, and more. By leveraging this technology, users can navigate through interfaces, access entertainment, and engage with digital content with unprecedented ease and comfort, with a significantly larger set of compatible devices than before.
  <br/><br/>
  The culmination of our efforts is a fully functional Android application that is primed for deployment on the Android store. With MotionInput integrated to recognize both hand and facial gestures, and upcoming compatibility with eye gaze technology, our solution promises to revolutionize the accessibility landscape. Beyond the technical achievements, the real impact lies in the tangible difference it could make in the lives of countless individuals, offering them independence, convenience, and an enhanced quality of life.
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
  Client Liaison, Programmer, Tester
  `,
  robbie: `
  Report Editor, UI Designer, Researcher
  `,
  ulk: `
  Programmer, UI Designer, Tester
  `
}

const team_member_links = {
    hugh: {"linkedIn": "https://www.linkedin.com/in/hugh-stanway-764391252/",
            "github": "https://github.com/HughStanway"},
    robbie: {"linkedIn": "https://www.linkedin.com/in/robbiebmorris/",
            "github": "https://github.com/robbiebmorris"},
    ulk: {"linkedIn": "https://www.linkedin.com/in/ulk-gerguri-1a336120a/",
            "github": "https://github.com/Ulk-G"},
}

// function TeamMemberCard({ member }) {
//   return (
//     <div className={styles.teamMemberCard}>
//       <Card style={{ width: '18rem', padding: '2rem' }}>
//         <Card.Img variant="top" src={testImage} rounded />
//         <Card.Body className={styles.cardBody}>
//           <Card.Title className={styles.cardTitle}>
//           {team_members[member]}
//                 <Card.Link href={team_member_links[member].github}><FontAwesomeIcon icon={faGithub} className={styles.icon} /></Card.Link>
//                 <Card.Link href={team_member_links[member].linkedIn}><FontAwesomeIcon icon={faLinkedin} className={styles.icon} /></Card.Link>
//           </Card.Title>
//           <Card.Text className={styles.cardText}>{team_members_abstract[member]}</Card.Text>
//           </Card.Body>
//       </Card>
//     </div>
//   );
// }

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
            videoId="OGUIGSf4Wuc"
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