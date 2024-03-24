import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.css';

function TeamMemberCard({ member }) {
  const member_image = {
    hugh: "https://www.linkedin.com/in/hugh-stanway-764391252.png",
    robbie: "https://github.com/robbiebmorris.png",
    ulk: "https://github.com/Ulk-G.png"
  };
  
  const team_members = {
    hugh: "Hugh Stanway",
    robbie: "Robbie Morris",
    ulk: "Ulk Gerguri",
  };
  
  const team_member_links = {
    hugh: {
      "linkedIn": "https://www.linkedin.com/in/hugh-stanway-764391252/",
      "github": "https://github.com/HughStanway"
    },
    robbie: {
      "linkedIn": "https://www.linkedin.com/in/robbiebmorris/",
      "github": "https://github.com/robbiebmorris"
    },
    ulk: {
      "linkedIn": "https://www.linkedin.com/in/ulk-gerguri-1a336120a/",
      "github": "https://github.com/Ulk-G"
    },
  };
  
  const team_members_abstract = {
    hugh: `Client Liaison, Programmer, Tester`,
    robbie: `Report Editor, UI Designer, Researcher`,
    ulk: `Programmer, UI Designer, Tester`
  };
  
  return (
    <div className={styles.teamMemberCard}>
      <div className={styles.card} style={{ width: '18rem' }}>
        <img className={styles.cardImage} src={member_image[member]} alt={team_members[member]} />
        <div className={styles.cardBody}>
          <h2 className={styles.cardTitle}>{team_members[member]}</h2>
          <div className={styles.icons}>
            <a href={team_member_links[member].github} className={styles.iconLink}>
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </a>
            <a href={team_member_links[member].linkedIn} className={styles.iconLink}>
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
          </div>
          <p className={styles.cardText}>{team_members_abstract[member]}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;