import React from 'react';

import NavigationItem from './NavigationItems';
import classes from './NavigationItems.css';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>Burger builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default navigationItems;