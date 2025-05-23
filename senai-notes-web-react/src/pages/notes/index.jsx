import './notes.css';

import PainelEsquerdo from '../../components/painel-esquerdo';
import PainelSuperior from '../../components/painel-superior';
import PainelInferiorEsquerda from '../../components/painel-inferior-esquerda';
import PainelInferiorCentro from '../../components/painel-inferior-centro';
import PainelInferiorDireita from '../../components/painel-inferior-direita';
import { useState } from 'react';


function Notes() {


    const [noteSelecionada, setNoteSelecionada] = useState(null);
    const [tag, setTag] = useState(null);
    const [textoSelecionado, setTextoSelecionado] = useState(null);

    return (
        <>
            <div className="tela">

                <PainelEsquerdo enviarTag={tag=> setTag(tag)} />

                <main className='notas-direita'>

                    <PainelSuperior enviarTexto={texto => setTextoSelecionado(texto)} />

                    <div className="inferior">

                        <PainelInferiorEsquerda enviarNotaSelecionada={note => setNoteSelecionada(note)}  
                                                tagSelecionada={tag} 
                                                enviarTextoPesquisa={textoSelecionado} />

                        {noteSelecionada != null && (
                            <>
                                <PainelInferiorCentro recebeNotaSelecionada={noteSelecionada} />

                                <PainelInferiorDireita deletarNotaSelecionada={noteSelecionada}/>
                            </>

                        )}

                        {noteSelecionada == null && (
                            <>
                                <p>Não existe uma nota selecionada</p>
                            </>
                        )}
                    </div>

                </main>

                <footer></footer>

            </div>

        </>
    )
}

export default Notes