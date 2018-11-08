import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationsItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
  return (
    <div className={classes.sideDrawer}>
      <Logo />
      <nav>
        <NavigationsItems />
      </nav>
    </div>
  )
}

export default sideDrawer;