import React from 'react';
import s from './Preloader.module.css';
import loaderSVG from '../../../assets/images/rings.svg';

let Preloader = (props) => {
  return <img src={loaderSVG} className={s.isFetching} alt="Loading ..." />
}


export default Preloader;