import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformIng = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        }).reduce((arr, el) => {
            // console.log('arr', arr)
            // console.log('el', el)
            return arr.concat(el)
            // console.log('arr after', arr)
        }, []);
        if (transformIng.length === 0) {
            transformIng = <p>Please add some ingredients!</p>
        }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformIng}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;