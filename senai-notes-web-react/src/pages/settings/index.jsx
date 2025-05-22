import './settings.css';

import PainelEsquerdo from '../../components/painel-esquerdo';
import PainelSuperiorSettings from '../../components/painel-superior-settings';
import PainelEsquerdoSettings from '../../components/painel-esquerdo-settings';


function Settings() {

    return (
        <>
            <div className="tela-settings">

                <PainelEsquerdo />

                <main className='painel-direito'>

                    <PainelSuperiorSettings />

                    <div className="painel-inferior">

                        <PainelEsquerdoSettings />

                    </div>

                </main>

                <footer></footer>

            </div>

        </>
    )
}

export default Settings