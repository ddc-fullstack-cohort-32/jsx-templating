import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import { library } from '@fortawesome/fontawesome-svg-core'




import "../index.css";
import {
    faEnvelope,
    faPencilAlt,
    faSignInAlt,
    faSortDown,
    faUserCircle,
    faDog
} from "@fortawesome/free-solid-svg-icons";

import {faKey} from "@fortawesome/free-solid-svg-icons/faKey";
import {NavBar} from "./shared/components/NavBar";
import {Posts} from "./posts/Posts";
import {AboutUs} from "./AboutUs";
import {Home} from "./Home";
import {FourOhFour} from "./FourOhFour";
import {Provider} from "react-redux";


library.add(faPencilAlt, faUserCircle, faSortDown, faEnvelope, faSignInAlt, faKey, faDog );

export const App = (store) => (
    <>
        <Provider store={store} >
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/about-us" component={AboutUs} />
                <Route exact path="/posts" component={Posts} />
                <Route exact path="/" component={Home} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>
        </Provider>
    </>
);
