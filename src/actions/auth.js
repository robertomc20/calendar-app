import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

// Login usuario
export const startLogin = (email, password) => {
    return async (dispatch) => {
        // console.log(email, password)

        const resp = await fetchSinToken("auth", { email, password }, "POST");
        const body = await resp.json();
        // console.log(body)

        if (body.ok) {
            localStorage.setItem("token", body.token);
            localStorage.setItem("token-init-date", new Date().getTime());

            dispatch(
                login({
                    uid: body.uid,
                    name: body.name
                })
            );
        } else {
            Swal.fire("Error", body.msg, "error");
        }
    };
};
// Registro usuario
export const startRegister = (name, email, password) => {
    return async (dispatch) => {
        const resp = await fetchSinToken(
            "auth/register",
            { name, email, password },
            "POST"
        );
        const body = await resp.json();

        if (body.ok) {
            localStorage.setItem("token", body.token);
            localStorage.setItem("token-init-date", new Date().getTime());

            dispatch(
                login({
                    uid: body.uid,
                    name: body.name
                })
            );

            Swal.fire(
                "Registro exitoso",
                "Se ha logrado registrar correctamente.",
                "success"
            );
        } else {
            Swal.fire("Error", body.msg, "error");
        }
    };
};

// Check log y renew token
export const startChecking = () => {
    return async (dispatch) => {
        const resp = await fetchConToken("auth/renew");
        const body = await resp.json();

        if (body.ok) {
            localStorage.setItem("token", body.token);
            localStorage.setItem("token-init-date", new Date().getTime());

            dispatch(
                login({
                    uid: body.uid,
                    name: body.name
                })
            );
        } else {
            dispatch(checkingFinish());
        }
    };
};

const checkingFinish = () => ({
    type: types.authCheckingFinish
});

const login = (user) => ({
    type: types.authLogin,
    payload: user
});

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logout());
    };
};

const logout = () => ({
    type: types.authLogout
});
