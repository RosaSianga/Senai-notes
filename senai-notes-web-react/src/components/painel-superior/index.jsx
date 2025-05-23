import './painel-superior.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function PainelSuperior({enviarTexto}) {

    const [texto, setTexto] = useState("");

    const clickSettings = async () => {

        window.location.href = "/settings"
    }

    const clickPesquisa = (texto) => {

        enviarTexto(texto);
    }


    return (
        <>
            <nav className="superior">
                <h1>All Notes</h1>

                <div className="pesquisa">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' onClick={() => clickPesquisa(texto)} />
                    <input className="input" type="text" placeholder="Search by title, content or tags..." value={texto} onChange={event => setTexto(event.target.value)} />

                    <FontAwesomeIcon icon={faGear} className='icon' onClick={() => clickSettings()} />
                    <FontAwesomeIcon icon={faUser} className='icon' />

                </div>

            </nav>

        </>
    )
}

export default PainelSuperior;
