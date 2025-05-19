import './painel-superior.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

function PainelSuperior() {

    const clickSettings = async () => {

         window.location.href = "/settings"
    }

    return (
        <>
            <nav className="superior">
                <h1>All Notes</h1>

                <div className="pesquisa">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
                    <input className="input" type="text" placeholder="Search by title, content or tags..." />

                    <FontAwesomeIcon icon={faGear} className='icon' onClick={() => clickSettings()}/>
                    <FontAwesomeIcon icon={faUser} className='icon' />

                </div>

            </nav>

        </>
    )
}

export default PainelSuperior;
