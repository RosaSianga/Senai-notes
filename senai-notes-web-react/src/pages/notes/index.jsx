import './notes.css';
import logo from '../../assets/img/logo.svg';
import archive from '../../assets/img/Archive.svg';
import lixeira from '../../assets/img/Delete.svg';
import home from '../../assets/img/Home.svg';
import perfil from '../../assets/img/Perfil.svg';
import refresh from '../../assets/img/Refresh.svg';
import search from '../../assets/img/Search.svg';
import settings from '../../assets/img/Settings.svg';
import tag from '../../assets/img/Tag.svg';
import setinha from '../../assets/img/Setinha.svg';
import imgNote from '../../assets/img/Image-notes.svg'


function Notes() {


    return (
        <>

            <div className="tela">
                <header className='notas-esquerda'>

                    <img className="logo" src={logo} alt="Logo Senai Notes" />

                    <button className='botao-notes'>
                        <img src={home} alt="Imagem home" />
                        All Notes
                        <img className='seta' src={setinha} alt="Imagem Seta" />
                    </button>

                    <button className='botao-notes'>
                        <img src={archive} alt="Imagem arquivo" />
                        Archived Notes
                    </button>

                    <div className="tags">
                        <p>Tags</p>

                        <button className='botao-notes'>
                            <img src={tag} alt="Imagem da Tag" />
                            Cooking
                        </button>
                    </div>



                </header>

                <main className='notas-direita'>

                    <div className="superior">
                        <h1>All Notes</h1>

                        <div className="pesquisa">
                            <img src={search} alt="Imagem pesquisa" />
                            <input onKeyUp={event => onKeyUp(event)} className="input" type="text" placeholder="Search by title, content or tags..." />

                            <img src={settings} alt="Imagem configuração" />
                            <img src={perfil} alt="Imagem do perfil" />
                        </div>

                    </div>

                    <div className="inferior">

                        <div className="inferior-esquerda">
                            <button className='botao-new-note'> + Create New Note </button>

                            <div className='nota-incluida'>
                                <img src={imgNote} alt="Imagem da Nota" />
                                <div className="inf-tag">
                                    <p>React Perfomance </p>
                                    <p>Dev</p>
                                    <p>15/05/2025</p>
                                </div>

                            </div>

                        </div>

                        <div className="inferior-centro">

                        </div>

                        <div className="inferior-direita">

                        </div>
                    </div>

                </main>

                <footer></footer>

            </div>

        </>
    )
}

export default Notes
