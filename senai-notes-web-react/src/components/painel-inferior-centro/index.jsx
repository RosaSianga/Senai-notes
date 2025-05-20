import './painel-inferior-centro.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';


function PainelInferiorCentro() {

    return (
        <>
            <nav className="inferior-centro">

                <div className="imagem"></div>

                <input type="text" className='titulo' placeholder='Insira o titulo da nota' />

                <div className="inf-descricao">
                    <p className='tag-descricao'>
                        <FontAwesomeIcon icon={faTags} className='icon' />
                        Tags
                    </p>
                    <input type="text" className='tag-descricao'/>
                </div>

                <div className="inf-descricao">
                    <p className='tag-descricao'>
                        <FontAwesomeIcon icon={faClock} className='icon' />
                        Last Edited
                    </p>
                    <p className='tag-descricao'>29 Oct 2024</p>
                </div>

                <div className="detalhe">
                    <textarea className="texto" name="texto"> texto digitado pelo usuario </textarea>
                </div>


                <div className="area-botoes">
                    <button className='botao-save'> Salve Notes </button>

                    <button className='botao-cancel'> Cancel </button>

                </div>

            </nav>



        </>
    )
}

export default PainelInferiorCentro