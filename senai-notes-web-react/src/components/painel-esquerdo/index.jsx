import './painel-esquerdo.css';
import logo from '../../assets/img/logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faFileZipper } from '@fortawesome/free-regular-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons/faTag';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';


function PainelEsquerdo() {

    return (
        <>
            <nav className='notas-esquerda'>

                <img className="logo" src={logo} alt="Logo Senai Notes" />

                <button className='botao-notes'>
                    <FontAwesomeIcon icon={faHouse} className='icon'/>
                    All Notes
                    <FontAwesomeIcon icon={faArrowRight} className='seta' />
                </button>

                <button className='botao-notes'>
                    <FontAwesomeIcon icon={faFileZipper} className='icon'/>
                    Archived Notes
                </button>

                <div className="tags">
                    <p>Tags</p>

                    <button className='botao-notes'>
                        <FontAwesomeIcon icon={faTag} className='icon' />
                        Cooking
                    </button>

                    <button className='botao-notes'>
                        <FontAwesomeIcon icon={faTag} className='icon' />
                        Cooking
                    </button>

                    <button className='botao-notes'>
                        <FontAwesomeIcon icon={faTag} className='icon' />
                        Cooking
                    </button>


                    <button className='botao-notes'>
                        <FontAwesomeIcon icon={faTag} className='icon' />
                        Cooking
                    </button>
                </div>


            </nav>

        </>
    )
}

export default PainelEsquerdo;
