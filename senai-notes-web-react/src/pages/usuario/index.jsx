import './usuario.css'
import logo from '../../assets/img/logo.svg'

function Usuario() {


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

                        <button className="btn" >Entrar</button>

                        <p> No account yet ? Sign Up </p>

                    </div>

                </main>

            </div>

            <footer></footer>



        </>
    )
}

export default Usuario
