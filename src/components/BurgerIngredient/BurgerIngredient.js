import React, { Component }from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render () {
        switch(this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case('meat'): 
                ingredient = <div className={classes.Meat}></div>;
            case('cheese'): 
                ingredient = <div className={classes.Cheese}></div>;
            case('salad'): 
                ingredient = <div className={classes.Salad}></div>;
            case('bacon'): 
                ingredient = <div className={classes.Bacon}></div>;
            default:
                ingredient = null;
        }
    }
}

BurgerIngredient.prototype = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;