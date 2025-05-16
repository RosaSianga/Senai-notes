import './usuario.css'
import logo from '../../assets/img/logo.svg'
import { useState } from 'react';

function Usuario() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <>

            <header></header>

            <div className="borda-usuario">

                <main className="page-container-usuario">

                    <img src={logo} alt="Logo Senai Notes" />

                    <h1>Create Your Account</h1>
                    <p>Sign up to start organizing  your notes and boost your productivity.</p>

                    <div className="usuario-container">

                        <div className="label">
                            <p className="descricao">Name</p>
                            <p></p>
                        </div>

                        <input className="inpt" value={nome} onChange={event => setNome(event.target.value)} type="text" placeholder="Insira o nome" />

                        <div className="label">
                            <p className="descricao">Email Address</p>
                            <p></p>
                        </div>

                        <input className="inpt" value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="email@example.com" />

                        <div className="label">
                            <p className="descricao">Password</p>
                        </div>

                        <input className="inpt" value={senha} onChange={event => setSenha(event.target.value)} type="password" placeholder="Insira a senha" />
                        <p className='label-p'>At least 8 characters</p>

                        <button className="btn" >Sign up</button>
                        <div className="valida-usuario">
                            <p>Already have a account? </p>
                            <a className="link" href='/login'> Login</a>
                        </div>

                    </div>

                </main>

            </div>

            <footer></footer>



        </>
    )
}

export default Usuario
