import './login.css'
import logo from '../../assets/img/logo.svg'
import { useState } from 'react';

function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const clickLogin = async () => {

        let emailValid = validarEmail(email);
        console.log(emailValid);

        if (email == "" || senha == "") {
            alert("Email não informado");
        } else if (emailValid == false) {
            alert("Email inválido. Tente novamente");
        } else {
            let response = await fetch("http://localhost:3000/users", {

                headers: {
                    "content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    senha: senha
                })
            });

            console.log(response);

            if (response.ok == true) {

                alert("Login realizado com sucesso");

                let json = await response.json();

                let userId = json.user.id;


                // GUARDAR INFORMAÇÃO NA PAGINA
                localStorage.setItem("meuId", userId);

                // window.location.href = "/Chat"

            } else {

                if (response.status == 401) {

                    alert("Credenciais incorretas. Tente novamente");

                } else {

                    alert("Erro inesperado aconteceu, caso persista contate os administradores.");
                }
            }
        }
    }

    return (
        <>

            <header></header>

            <div className="borda-login">

                <main className="page-container">

                    <img src={logo} alt="Logo Senai Notes" />

                    <h1>Welcome to Notes</h1>
                    <p>Please log in to continue</p>

                    <div className="login-container">

                        <div className="label">
                            <p className="descricao">Email Address</p>
                            <p></p>
                        </div>


                        <input className="inpt" type="email" placeholder="email@example.com" />

                        <div className="label">
                            <p className="descricao">Password</p>
                            <a href='/forgot'> Forgot</a>
                        </div>

                        <input className="inpt" type="password" placeholder="Insira a senha" />

                        <button className="btn" onClick={() => clickLogin()}>Entrar</button>
                        <div className="valida-usuario">
                            <p> No account yet ? </p>
                            <a className="link" href='/usuario'> Sign Up</a>
                        </div>

                    </div>

                </main>

            </div>

            <footer></footer>



        </>
    )
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);

}

export default Login
