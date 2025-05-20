import './notes.css';

import PainelEsquerdo from '../../components/painel-esquerdo';
import PainelSuperior from '../../components/painel-superior';
import PainelInferiorEsquerda from '../../components/painel-inferior-esquerda';
import PainelInferiorCentro from '../../components/painel-inferior-centro';
import PainelInferiorDireita from '../../components/painel-inferior-direita';


function Notes() {

    return (
        <>
            <div className="tela">

                <PainelEsquerdo />

                <main className='notas-direita'>

                    <PainelSuperior />

                    <div className="inferior">

                        <PainelInferiorEsquerda />
                        {/* 
                        {noteSelecionado == null && (
                            <> */}
                        <PainelInferiorCentro />

                        <PainelInferiorDireita />
                        {/* </>

                        )} */}
                    </div>

                </main>

                <footer></footer>

            </div>

        </>
    )
}

export default Notes