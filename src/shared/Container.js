import React from 'react';
import {css, cx} from 'emotion';

const Container = props => {
    const {className, ...rest} = props;
    return (
        <div className={cx(
            css({
                color: 'red'
            }),
            className
        )}
             {...rest}>
            {props.children}
        </div>
    );
};

Container.propTypes = {};

Container.defaultProps = {};

export default Container;