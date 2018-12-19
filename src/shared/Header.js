import React from 'react';
import logo from '../logo.png'
import PropTypes from 'prop-types';
import {css} from 'emotion';
import Container from './Container';

const Header = props => {
    return (
        <Container className={css({
            display: 'flex',
            height: '5em'
        })}>
            <img className={css({
                objectFit: 'contain',
                marginRight: 'auto',
                height: '100%'
            })}
                 src={logo}
                 alt={'TEMASYS, Inc.'}/>
            <a href={'#'}>
                Home
            </a>
            <a href={'#'}>
                About
            </a>
        </Container>
    );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;