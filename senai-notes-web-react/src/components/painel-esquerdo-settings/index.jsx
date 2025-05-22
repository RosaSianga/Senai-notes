import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './painel-esquerdo-settings.css';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket';
import { faArrowRight, faCircleHalfStroke, faLock, faTextHeight } from '@fortawesome/free-solid-svg-icons';


function PainelEsquerdoSettings() {

    return (
        <>
            <nav className="inferior-esquerda-settings">
                <button className='botao-notes'>
                    <FontAwesomeIcon icon={faCircleHalfStroke} className='icon' />
                    Color Theme
                    <FontAwesomeIcon icon={faArrowRight} className='seta' />
                </button>

                <button className='botao-notes'>
                    <FontAwesomeIcon icon={faTextHeight} className='icon' />
                    Font Theme
                </button>

                <button className='botao-notes'>
                    <FontAwesomeIcon icon={faLock} className='icon' />
                    Change Password
                </button>

                <button className='botao-notes'>
                    <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
                    Logout
                </button>

            </nav>


        </>
    )
}

export default PainelEsquerdoSettings