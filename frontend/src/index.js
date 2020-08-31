import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import { library } from '@fortawesome/fontawesome-svg-core'



import {FourOhFour} from "./ui/FourOhFour";
import {Home} from "./ui/Home";
import {AboutUs} from "./ui/AboutUs";
import "./index.css";
import {
	faEnvelope,
	faPencilAlt,
	faSignInAlt,
	faSortDown,
	faUserCircle,
	faDog
} from "@fortawesome/free-solid-svg-icons";
import {NavBar} from "./ui/shared/components/NavBar";
import {faKey} from "@fortawesome/free-solid-svg-icons/faKey";
import {Posts} from "./ui/Posts";

library.add(faPencilAlt, faUserCircle, faSortDown, faEnvelope, faSignInAlt, faKey, faDog );

const Routing = () => (
	<>
		<BrowserRouter>
			<NavBar/>
			<Switch>
				<Route exact path="/about-us" component={AboutUs} />
				<Route exact path="/posts" component={Posts} />
				<Route exact path="/" component={Home} />
				<Route component={FourOhFour} />
			</Switch>
		</BrowserRouter>
	</>
);
ReactDOM.render(<Routing/>, document.querySelector('#root'));
