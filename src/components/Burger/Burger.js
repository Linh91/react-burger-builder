import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const transformIng = Object.keys(props.ingredients)
        .map(igKey => {
            console.log('igkey', igKey)
            console.log('Object.keys(props.ingredients)', Object.keys(props.ingredients))
            console.log('props.ingredients[igKey]', props.ingredients[igKey])
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
                console.log('igKey + i', igKey + i)
                console.log('i', i)
                // console.log('key', key)
            });
        });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformIng}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;