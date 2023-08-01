// Racetracks.js
import React from 'react';
import styles from '../components/racetracks.module.css'; // Import the CSS module
import { Link } from "react-router-dom";


const Racetracks = () => {
  return (
    <div>
      <title>Document</title>
      <div className={styles.v1_2}>
        <div className={styles.v1_3} />
        <Link to="/"><div className={styles.v1_61} /></Link>

        <div className={styles.v1_13}>
          <div className={styles.v1_14} />
          <div className={styles.v1_15} />
        </div>
        <div className={styles.v1_161} />
        <Link to="/second"><span className={styles.v1_29}>Groups</span></Link>
        <div className={styles.v1_181} />
        <span className={styles.v1_201}>Leader boards</span>
        <span className={styles.v1_21}>About</span>
        <span className={styles.v1_22}>Contact</span>
        <div className={styles.v1_10}>
          <span className={styles.v1_11}>Sign in</span>
          <div className={styles.v1_12} />
        </div>
        <div className={styles.v1_231} />
        <div className={styles.v1_241} />
        <span className={styles.v1_25}>The Riders</span>
        <span className={styles.v1_261}>The Warrior</span>
        <span className={styles.v1_27}>Department HR</span>
        <span className={styles.v1_281}>Department Data</span>
        <span className={styles.v1_321}></span>
        <Link to="/fourth"><div className={styles.v1_301} /></Link>
        <div className={styles.v1_311} />
        <div className={styles.v1_331} />
        <div className={styles.v1_34} />
        <div className={styles.v1_35} />
        <div className={styles.v1_361} />
      </div>
    </div>
  );
};

export default Racetracks;
