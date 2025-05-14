import './reset.css'
import logo from '../../assets/img/logo.svg'

function Reset() {


    return (
        <>

            <header></header>

            <div className="borda">

                <main className="page-container">

                    <img src={logo} alt="Logo Senai Notes" />

                    <h1>Reset Your Password</h1>
                    <p>Chose a new password to secure your account.</p>

                    <div className="login-container">

                        <div className="label">
                            <p className="descricao">New Password</p>
                            <p></p>
                        </div>


                        <input className="inpt" type="password" />
                        <p className='label-p'>At least 8 characters</p>

                        <div className="label">
                             <p className="descricao">Confirm New Password</p>
                            <p></p>
                        </div>

                        <input className="inpt" type="password" />

                        <button className="btn" >Reset Password</button>

                    </div>

                </main>

            </div>

            <footer></footer>



        </>
    )
}

export default Reset
