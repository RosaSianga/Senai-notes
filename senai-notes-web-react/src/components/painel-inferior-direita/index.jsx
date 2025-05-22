
import './painel-inferior-direita.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faTrashCan } from '@fortawesome/free-solid-svg-icons';


function PainelInferiorDireita() {

    return (
        <>
            <nav className="inferior-direita">

                <button className='botao-notes'>
                    <FontAwesomeIcon icon={faArchive} className='icon' />
                    Archive Notes
                </button>

                <button className='botao-notes'>
                    <FontAwesomeIcon icon={faTrashCan} className='icon' />
                    Delete Notes
                </button>

            </nav >

        </>
    )
}

export default PainelInferiorDireita