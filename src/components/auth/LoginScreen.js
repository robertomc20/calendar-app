import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { startLogin, startRegister } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
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
    const dispatch = useDispatch();

    const [formLoginValues, handleLoginInputChange] = useForm({
        lEmail: "roberto@gmail.com",
        lPassword: "123456"
    });

    const [formRegisterValues, handleRegisterInputChange] = useForm({
        rName: "Fernando",
        rEmail: "fernando@gmail.com",
        rPassword1: "123456",
        rPassword2: "123456"
    });

    const { lEmail, lPassword } = formLoginValues;

    const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(startLogin(lEmail, lPassword));
        // console.log(formLoginValues);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (rPassword1 !== rPassword2) {
            return Swal.fire('Error', 'Las contraseñas deben de ser iguales', 'error');
        }

        dispatch(startRegister(rName, rEmail, rPassword1));
        // console.log(formLoginValues);
    };

    

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form on onSubmit={handleLogin}>
                        <div className="form-group">
                            <TextField
                                id="standard-basic"
                                label="Correo"
                                variant="standard"
                                type="email"
                                name="lEmail"
                                value={lEmail}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                id="standard-basic"
                                label="Contraseña"
                                variant="standard"
                                type="password"
                                name="lPassword"
                                value={lPassword}
                                onChange={handleLoginInputChange}
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
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <CssTextField
                                id="standard-basic"
                                label="Nombre"
                                variant="standard"
                                name="rName"
                                value={rName}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <CssTextField
                                id="standard-basic"
                                type="email"
                                label="Correo"
                                variant="standard"
                                name="rEmail"
                                value={rEmail}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <CssTextField
                                id="standard-basic"
                                label="Contraseña"
                                variant="standard"
                                type="password"
                                name="rPassword1"
                                value={rPassword1}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <CssTextField
                                id="standard-basic"
                                label="Repita la contraseña"
                                variant="standard"
                                type="password"
                                name="rPassword2"
                                value={rPassword2}
                                onChange={handleRegisterInputChange}
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
