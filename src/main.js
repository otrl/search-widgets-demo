import React from "react";
import { render } from "react-dom";
import { Grid, Row, Col, Alert, Jumbotron, Button } from "react-bootstrap";
import * as OtrlWidgets from "otrl-search-widgets";

import "./main.less"; // customises otrl-search-widgets styles

import Header from "./components/Header";

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

OtrlWidgets.configure(DefaultTrainOperator, "stage");

class Main extends React.Component {
    state = {
        brand: DefaultTrainOperator,
        reloading: false
    };

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
                                    React.js components. See [link]
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
                                        newWindow
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
