import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-bootstrap';

import Header from './Header';

const Layout = ({ children }) => (
    <Grid className="container-fluid">
        <Row>
            <Header />
        </Row>
        <Row>
            { children }
        </Row>
    </Grid>
);

Layout.propTypes = {
    children: PropTypes.any
};
