import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage, RoomPage } from "@/components/pages";

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route exact path="/room/:roomId" component={RoomPage} />
	</Switch>
);

export default Routes;
