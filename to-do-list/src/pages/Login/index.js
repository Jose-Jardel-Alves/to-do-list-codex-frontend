import "./styles.css";
import React, { useState } from "react";
import SignButton from "../../components/Login/SignButton";
import SignInput from "../../components/Login/SignInput";
import InvalidityMsg from "../../components/Login/InvalidityMsg";
import { validateEmail, validatePassword } from "../../utils/validation";
import api from "../../service";

const Login = () => {

    const [email, setEmail ] = useState({ value: "", invalidity: "" });
    const [password, setPassword] = useState({ value: "", invalidity: "" })


    const changeEmail = (e) => {
        const value = e.target.value;
    
        setEmail({ ...email, value });

    };
    
    const changePassword = (e) => {
    const value = e.target.value;
    
    setPassword({ ...password, value });
    };

    const validateForm = () => {
        const invalidityEmail = validateEmail(email.value);
        const invalidityPassword = validatePassword(password.value);
    
        setEmail({ ...email, invalidity: invalidityEmail });
        setPassword({ ...password, invalidity: invalidityPassword });
    
        return !invalidityEmail && !invalidityPassword ? true : false;
    };

    const submit = () => {
    if (validateForm()) {
        api.post(
            "/user/signIn",
            { email: email.value, password: password.value },
            {
            headers: { "Content-Type": "application/json" },
            }
        )
        .then((response) => {
            const token = response.data.token;
            // salvando o token do usuario no localStorage
            localStorage.setItem("token", token);
            // salvando os dados do usuario
            localStorage.setItem("user", JSON.stringify(response));
            // redirecionando para tela Home
            PaymentResponse.history.push("/home");
        })
        .catch((error) => {
            console.log(error.response);
            const msg = error.response.data;

            // exibindo mensagem de erro que o backend retorna
            if (msg.indexOf("Email não cadastrado") !== -1)
            setEmail({ ...email, invalidity: "Email não cadastrado" });
            else if (msg === "Senha inválida")
            setPassword({ ...password, invalidity: msg });
        });
    }
    
    };  
    

    return (
        <div id="login">
            <div id="loginBox">
                <h2>Login</h2>
                <SignInput typeInput ="email" label= "Email: " handleChange={changeEmail}/>
                <InvalidityMsg msg={email.invalidity} />
                <SignInput typeInput ="password" label = "Senha: " handleChange={changePassword}/>
                <InvalidityMsg msg={password.invalidity} />
                <a href="/">Esqueceu sua senha?</a>
                <SignButton label ="ENTRAR" handleClicked={submit}/>            
                <a href="/signup">Cadastre-se</a>
            </div>
        </div>
    )
}

export default Login;