import React from "react";
import { 
    Link, 
    Switch, 
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";

import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />
                    <Route exact path="/" component={ CalendarScreen } />

                    <Redirect to="/" />
                </Switch>

                {/* 
                    // exact /login - LoginScreen
                    // exact /  -CalendarScreen
                */}
            </div>
        </Router>
    );
};
