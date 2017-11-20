import React from "react";
import { render } from "react-dom";
import { Grid, Row, Col, Alert, Jumbotron, Button } from "react-bootstrap";
import * as OtrlWidgets from "otrl-search-widgets";

import "./main.less"; // customises otrl-search-widgets styles

import Header from "./components/Header";

// List of brands & configuration, so we can show a brand-selector dropdown
// (Most sites aren't going to need this!)
const DefaultTrainOperator = "thameslink";
const TrainOperators = [
    "gatwick",
    "greatnorthern",
    "londonmidland",
    "southeastern",
    "southern",
    "thameslink"
];
const TrainOperatorTabs = {
    gatwick: ["search"]
};

// Important: Configure the widgets - should be done _before_ rending a JourneyPlanner
OtrlWidgets.configure(DefaultTrainOperator);

// This is our main app
class Main extends React.Component {
    state = {
        brand: DefaultTrainOperator,
        reloading: false
    };

    // Logic to handle the brand-selector dropdown
    handleBrandChange = brand => {
        // The widgets need to be configured _before_ rendering.
        // So here we remove the widget temporarily to force it to re-mount
        clearTimeout(this.timeout);
        this.setState({ brand, reloading: true });
        this.timeout = setTimeout(() => {
            OtrlWidgets.configure(brand);
            this.setState({ reloading: false });
        }, 50);
    };

    render() {
        const { brand, reloading } = this.state;
        return (
            <Grid className="container-fluid">
                <Row>
                    <Header
                        brands={ TrainOperators }
                        brand={ brand }
                        onSelectBrand={ this.handleBrandChange }
                    />
                </Row>
                <Row>
                    <Grid className="container">
                        <Row>
                            <Col xs={ 12 }>
                                <Alert bsStyle="info">
                                    This is an example web app built with
                                    webpack & using the OTRL search widgets as
                                    React.js components.
                                </Alert>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 7 } lg={ 8 }>
                                <Jumbotron>
                                    <h1>Weekend getaway to Blackpool</h1>
                                    <p>
                                        Cat ipsum dolor sit amet, intently stare
                                        at the same spot yet instead of drinking
                                        water from the cat bowl, make sure to
                                        steal water from the toilet eat the fat
                                        cats food
                                    </p>
                                    <p>
                                        <Button bsStyle="primary">
                                            Find out more
                                        </Button>
                                    </p>
                                </Jumbotron>
                            </Col>
                            <Col md={ 5 } lg={ 4 }>
                                {!reloading && (
                                    <OtrlWidgets.JourneyPlanner
                                        tabs={ TrainOperatorTabs[brand] }
                                        onSearch={ (searchType, resultsUrl) => {
                                            console.log(`${searchType}: ${resultsUrl}`);
                                            window.open(resultsUrl);
                                        }}
                                    />
                                )}
                            </Col>
                        </Row>
                    </Grid>
                </Row>
            </Grid>
        );
    }
}

render(<Main />, document.getElementById("app-container"));
