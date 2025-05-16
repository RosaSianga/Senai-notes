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
import imgDescricao from '../../assets/img/Imagem-Descricao.svg';
import clock from '../../assets/img/clock.svg';


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

                            <img className="imagem" src={imgDescricao} alt="Imagem do detalhamento do notes" />

                            <h1 className='titulo'>React Performance Optimization</h1>

                            <div className="inf-descricao">
                                <p className='tag-descricao'>
                                    <img src={tag} alt="Imagem da Tag" />
                                    Tags
                                </p>
                                <p className='tag-descricao'>Dev, React</p>
                            </div>

                            <div className="inf-descricao">
                                <p className='tag-descricao'>
                                    <img src={clock} alt="Imagem da data de criação" />
                                    Last Edited
                                </p>
                                <p className='tag-descricao'>29 Oct 2024</p>
                            </div>

                            <div className="detalhe">
                                <p className='texto'>Texto do detalhe do notes</p>
                                <p className='texto'>Texto do detalhe do notes</p>
                                <p className='texto'>Texto do detalhe do notes</p>
                                <p className='texto'>Texto do detalhe do notes</p>
                                <p className='texto'>Texto do detalhe do notes</p>
                                <p className='texto'>Texto do detalhe do notes</p>
                            </div>


                            <div className="area-botoes">
                                <button className='botao-save'> Salve Notes </button>

                                <button className='botao-cancel'> Cancel </button>

                            </div>

                        </div>


                        <div className="inferior-direita">

                            <button className='botao-notes'>
                                <img src={archive} alt="Imagem Arquivo" />
                                Arqchive Notes
                            </button>


                            <button className='botao-notes'>
                                <img src={lixeira} alt="Imagem Lixeira" />
                                Delete Notes
                            </button>

                        </div>
                    </div>

                </main>

                <footer></footer>

            </div>

        </>
    )
}

export default Notes
