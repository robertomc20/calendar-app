import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import "./LoginScreen.css";

const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
        color: "white"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "white"
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "red"
        },
        "&:hover fieldset": {
            borderColor: "yellow"
        },
        "&.Mui-focused fieldset": {
            borderColor: "white"
        }
    }
});

export const LoginScreen = () => {
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form>
                        <div className="form-group">
                            <TextField
                                id="standard-basic"
                                label="Correo"
                                variant="standard"
                                type="email"
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                id="standard-basic"
                                label="Contraseña"
                                variant="standard"
                                type="password"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form>
                        <div className="form-group">
                            <CssTextField
                                id="standard-basic"
                                label="Nombre"
                                variant="standard"
                            />
                        </div>
                        <div className="form-group">
                            <CssTextField
                                id="standard-basic"
                                type="email"
                                label="Correo"
                                variant="standard"
                            />
                        </div>
                        <div className="form-group">
                            <CssTextField
                                id="standard-basic"
                                label="Contraseña"
                                variant="standard"
                                type="password"
                            />
                        </div>

                        <div className="form-group">
                            <CssTextField
                                id="standard-basic"
                                label="Repita la contraseña"
                                variant="standard"
                                type="password"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Crear cuenta"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
