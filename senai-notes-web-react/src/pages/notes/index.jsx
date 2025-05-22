import './notes.css';

import PainelEsquerdo from '../../components/painel-esquerdo';
import PainelSuperior from '../../components/painel-superior';
import PainelInferiorEsquerda from '../../components/painel-inferior-esquerda';
import PainelInferiorCentro from '../../components/painel-inferior-centro';
import PainelInferiorDireita from '../../components/painel-inferior-direita';
import { useState } from 'react';


function Notes() {


    const [noteSelecionada, setNoteSelecionada] = useState(null);

    return (
        <>
            <div className="tela">

                <PainelEsquerdo />

                <main className='notas-direita'>

                    <PainelSuperior />

                    <div className="inferior">

                        <PainelInferiorEsquerda enviarNotaSelecionada={note => setNoteSelecionada(note)} />

                        {noteSelecionada != null && (
                            <>
                                <PainelInferiorCentro recebeNotaSelecionada={noteSelecionada} />

                                <PainelInferiorDireita />
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