import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import PageHeader from "../../components/pageHeader/PageHeader";
import Navbar from "../../components/navBar/navBar";
import Jumbotron from "../../components/jumbotron/Jumbotron"
import World from "../world/World";
import Us from "../US/Us";
import Technology from "../technology/Technology";
import Design from "../design/Design";
import Culture from "../culture/Culture";
import Business from "../business/Business";
import Politics from "../politics/Politics";
import Opinion from "../opinion/Opinion";
import Science from "../science/Science";
import Health from "../health/Health";
import Style from "../style/Style";
import Travel from "../travel/Travel";

class Dashbord extends Component {
    render() {
        return (
            <BrowserRouter>
                <section className="container">
                    <Route>
                        <PageHeader />
                    </Route>

                    <Route>
                        <Navbar />
                    </Route>

                    <Route exact path="/dashbord">
                        <Jumbotron title="Wel-come!" />
                    </Route>

                    <Route exact path="/world">
                        <World />
                    </Route>

                    <Route exact path="/us">
                        <Us />
                    </Route>

                    <Route exact path="/technology">
                        <Technology />
                    </Route>

                    <Route exact path="/design">
                        <Design />
                    </Route>

                    <Route exact path="/culture">
                        <Culture />
                    </Route>

                    <Route exact path="/business">
                        <Business />
                    </Route>

                    <Route exact path="/politics">
                        <Politics />
                    </Route>

                    <Route exact path="/opinion">
                        <Opinion />
                    </Route>

                    <Route exact path="/science">
                        <Science />
                    </Route>

                    <Route exact path="/health">
                        <Health />
                    </Route>

                    <Route exact path="/style">
                        <Style />
                    </Route>

                    <Route exact path="/travel">
                        <Travel />
                    </Route>

                </section>
            </BrowserRouter>
        );
    };
};

export default Dashbord;