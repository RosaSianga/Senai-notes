import './painel-inferior-esquerda.css';

import imgNote from '../../assets/img/Image-notes.svg'

function PainelInferiorEsquerda() {

    return (
        <>
            <nav className="inferior-esquerda">
                <button className='botao-new-note'> + Create New Note </button>

                <div className='nota-incluida'>
                    <img src={imgNote} alt="Imagem da Nota" />
                    <div className="inf-tag">
                        <p>React Perfomance </p>
                        <div className="tags-notas">
                            <p className='tag1'>Dev</p>
                            <p className='tag1'>React</p>
                        </div>
                        <p>15/05/2025</p>
                    </div>

                </div>

                <div className='nota-incluida'>
                    <img src={imgNote} alt="Imagem da Nota" />
                    <div className="inf-tag">
                        <p>React Perfomance </p>
                        <div className="tags-notas">
                            <p className='tag1'>Dev</p>
                            <p className='tag1'>Angular</p>
                        </div>
                        <p>15/05/2025</p>
                    </div>

                </div>

                <div className='nota-incluida'>
                    <img src={imgNote} alt="Imagem da Nota" />
                    <div className="inf-tag">
                        <p>React Perfomance </p>
                        <div className="tags-notas">
                            <p className='tag1'>Dev</p>
                            <p className='tag1'>VIsio</p>
                        </div>
                        <p>15/05/2025</p>
                    </div>

                </div>

            </nav>


        </>
    )
}

export default PainelInferiorEsquerda