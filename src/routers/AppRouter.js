import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Switch,
    BrowserRouter as Router,
    Redirect
} from "react-router-dom";
import { startChecking } from "../actions/auth";

import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    const dispatch = useDispatch();
    const { checking, uid } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    if (checking) {
        return <h3>Espere..</h3>;
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        isAuthenticated={!!uid}
                        exact
                        path="/login"
                        component={LoginScreen}
                    />
                    <PrivateRoute
                        isAuthenticated={!!uid}
                        exact
                        path="/"
                        component={CalendarScreen}
                    />

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
