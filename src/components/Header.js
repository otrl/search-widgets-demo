import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";

export default class Header extends React.Component {
    static propTypes = {
        brand: PropTypes.string,
        brands: PropTypes.arrayOf(PropTypes.string),
        onSelectBrand: PropTypes.func
    };

    static defaultProps = {
        brand: "",
        brands: [],
        onSelectBrand: function noop() {}
    };

    handleBrandChange = event => {
        const { target: { value } } = event;
        this.props.onSelectBrand(value);
    };

    render() {
        const { brands } = this.props;
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>ACME Train Company</Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem href="#" active>
                        Webpack &amp; React
                    </NavItem>
                </Nav>
                <Nav>
                    <NavItem href="./vanilla.html">Vanilla JS</NavItem>
                </Nav>
                <Nav className="navbar-form" pullRight>
                    <select
                        onChange={ this.handleBrandChange }
                        className="form-control"
                        value={ this.props.brand }
                    >
                        {brands.map(brand => (
                            <option key={ brand }>{brand}</option>
                        ))}
                    </select>
                </Nav>
            </Navbar>
        );
    }
}
