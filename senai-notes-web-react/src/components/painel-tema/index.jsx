import './painel-tema.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';

function PainelTema() {

    return (
        <>
            <nav className="configuracao">
                <h1 className='titulo-color'>Color Theme</h1>
                <p className='descricao'>Escolha a cor do seu tema</p>
                <button className='botao-notes'>
                    <FontAwesomeIcon icon={faSun} className='icon' />
                    Ligth Mode
                </button>
                <button className='botao-notes'>
                    <FontAwesomeIcon icon={faCircleHalfStroke} className='icon' />
                    Dark Mode
                </button>
            </nav>

        </>
    )
}

export default PainelTema