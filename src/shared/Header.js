import React from 'react';
import logo from '../logo.png'
import PropTypes from 'prop-types';

const Header = props => {
    return (
        <div>
            <img src={logo}
                 alt={'TEMASYS Inc.'}/>
            Header has successfully been created.
        </div>
    );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;