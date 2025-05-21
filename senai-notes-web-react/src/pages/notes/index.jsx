import './notes.css';
import logo from '../../assets/img/logo.svg';
import archive from '../../assets/img/Archive.svg';
import lixeira from '../../assets/img/Delete.svg';
import home from '../../assets/img/Home.svg';
import perfil from '../../assets/img/Perfil.svg';
import search from '../../assets/img/Search.svg';
import settings from '../../assets/img/Settings.svg';
import tag from '../../assets/img/Tag.svg';
import setinha from '../../assets/img/Setinha.svg';
import imgNote from '../../assets/img/Image-notes.svg'
import imgdescricao from '../../assets/img/Rectangle 44.svg'
import imgtag from '../../assets/img/Tag.svg'
import imgrelogio from '../../assets/img/Circle Clock.svg'
import arquivo from '../../assets/img/Archive.svg'
import { userEffect, useState} from 'react';


function Notes() {


    const [Notes, setNotes] = useState([]);

    userEffect(() => {

        getNotes();

    }, []);

    const getNotes = async () => {

        let response = await fetch("http://localhost:3000/tags", {

            headers: {
                
                "authorization": "Bearer" + localStorage.getItem("meuToken")

            }


        });

        console.log(response);

        if (response.ok == true) {

            let json = await response.json(); // Pegue as informações dos chats.

            setNotes(json);

        } else {

            if (response.status == 401) {

                alert("Token inválido. Faça login novamente.");
                localStorage.clear();
                window.location.href = "/login";

            }

        }

    


    }
    

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
                            <button className='botao-new-note' onClick={() => Notes()}> + Create New Note </button>

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

                        <img className='img-centro' src={imgdescricao} alt="" />
                        <img className='img-tag-centro' src={imgtag} alt="" />
                        <img className='img-relogio-centro' src={imgrelogio} alt="" />
                        <input className='titulo-centro' type="text" />
                        <p className='tags-centro'>Tags</p>
                        <p className='Last-edited-centro'>Last edited</p>
                        <p className='dev'>Dev, React</p>
                        <p className='data'>29 Oct 2024</p>

                        <p className='titulo-segundario'>Key performance optimization techniques:</p>
                        <p className='code'>1. Code Splitting</p>
                        <p className='usereact'>- Use React.lazy() for route-based splitting</p>
                        <p className='implement'>- Implement dynamic imports for heavy components</p>
                        <p className='titulo-terciario'>2. Memoization</p>
                        <p className='useMemo'>- useMemo for expensive calculations</p>
                        <p className='useCall'>- useCallback for function props</p>
                        <p className='titulo-quatro'>3. Virtual List Implementation</p>
                        <p className='window'>- Use react-window for long lists</p>
                        <p className='implement2'>- Implement infinite scrolling</p>
                        <p className='todo'>TODO: Benchmark current application and identify bottlenecks</p>

                        <button className='save'>Save note</button>
                        <button className='cancel'>Cancel</button>
                        

                        </div>

                        <div className="inferior-direita">

                            <img className='lixo' src={lixeira} alt="" />
                            <img className='arquivo' src={arquivo} alt="" />
                            <button className='arquive'>Archive note</button>
                            <button className='delete'>Delete Note</button>

                        </div>
                    </div>

                </main>

                <footer></footer>

            </div>

        </> 
        
    )
}

export default Notes
