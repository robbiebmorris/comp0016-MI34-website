import React from 'react';
import styles from './styles.module.css';

function Video({ title, videoId }) {
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

export default Video;