import React from "react";
import PropTypes from "prop-types";

import { Redirect, Route } from "react-router-dom";

// en las props que recibimos, isAutenticated es para ver si el user es logeado
// el component, es el componente que se va a renderizar, se renombro ya que es un componente
// todos los demas argumentos, como el exact, path, etc, los recuperaremos con el operador ...rest
// quiere decir, que el resto de los argumentos caeran en esta prop.
export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    //console.log(rest);

    localStorage.setItem("lastPath", rest.location.pathname);

    // el return regresara un Route, y que va tener esta ruta?...
    // basicamente todo el resto de propiades, osea el ...rest.
    // luego de manera condicional, le pasaremos el componente junto con las props
    // que serian history, location, params etc.
    // luego en el ternario, si esta autenticado, lo mandaremos al componente que
    // el usuario quiere entrar junto con sus props, usamos el operador spread.
    // y si no esta autenticado, le redirigimos directo al componente del login.
    return (
        <Route
            {...rest}
            component={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

// Con esto, nuestro privateroute funciona de manera correcta
PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};