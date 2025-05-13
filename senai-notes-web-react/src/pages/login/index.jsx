import './login.css'
import logo from '../../assets/img/logo.svg'

function Login() {


    return (
        <>

            <header></header>

            <main className="page-container">

                <img src={logo} alt="Logo Senai Notes" />

                <h1>Welcome to Notes</h1>

                <div className="login-container">

                    <div className="label">
                        <p className="descricao">Email Address</p>
                        <p></p>
                    </div>


                    <input className="inpt" type="email" placeholder="Insira o e-mail" />

                    <div className="label">
                        <p className="descricao">Password</p>
                        <p>forgot</p>
                    </div>

                    <input className="inpt" type="password" placeholder="Insira a senha" />

                    <button className="btn" >Entrar</button>

                    <p> No account yet ? Sign Up </p>

                </div>

            </main>

            <footer></footer>



        </>
    )
}

export default Login
