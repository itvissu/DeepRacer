import React from 'react';
import home from '../components/firstpage.module.css';

import { Link } from 'react-router-dom';

const Firstpage = () => {
  return (
    <div className={home.v1_2}>
      <div className={home.v1_3} />
      <div className={home.v1_4} />
      <div className={home.v1_5} />
      <Link to="/secondnew"><span className={home.v1_6}>Groups</span></Link>
      <Link to="/third"><span className={home.v1_7}>Final Race</span></Link>
      <span className={home.v1_8}>Leader boards</span>
      <span className={home.v1_9}>About</span>
      <span className={home.v1_10}>Contact</span>
      <div className={home.v1_11} />

      <div className={home.v1_15}>
        <span className={home.v1_16}>Sign in</span>
        <div className={home.v1_17} />
      </div>
      <div className={home.v1_366} />
      <div className={home.v1_18}>
        <div className={home.v1_19} />
        <div className={home.v1_20} />
      </div>
      <span className={home.v1_21}>Developers</span>
      <span className={home.v1_22}>Start your </span>
      <span className={home.v1_222}>Engines</span>
      <span className={home.v1_23}>
        Developers of all skill levels can get hands with machine learning through
        a cloud-based 3D racing simulator, fully autonomous 1/18th scale race car
        driven by reinforcement learning, and global racing league.Build a
        model.Buy Now
      </span>
      <div className={home.v1_24} />
      <span className={home.v1_25}>Groups</span>
      <div className={home.v1_26} />
      <div className={home.v1_27}>
        <span className={home.v1_28}>Teams</span>
        <div className={home.v1_29} />
      </div>
      <span className={home.v1_30}>Races</span>
      <div className={home.v1_31} />
      <span className={home.v1_32}>Final Race</span>
      <span className={home.v1_333}>Raritan, New Jersey</span>
      <span className={home.v1_344}>23rd Oct</span>
      <span className={home.v1_344f}>2023</span>
      <div className={home.v1_35} />

    </div>
  );
};

export default Firstpage;