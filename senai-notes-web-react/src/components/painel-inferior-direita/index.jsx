
import './painel-inferior-direita.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faTrashCan } from '@fortawesome/free-solid-svg-icons';


function PainelInferiorDireita({deletarNotaSelecionada}) {

       const clickDelete = async () => {

        debugger
        const response = await fetch(`https://apisenainotesgrupo5temp.azurewebsites.net/api/Nota/excluirNota/${deletarNotaSelecionada.idNotas}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });

        if (response.ok == true) {
            alert("Anotação deletada com sucesso");
            window.location.reload()

        } else {
            alert("Erro ao deletar a nota");
        }
    }

    return (
        <>
            <nav className="inferior-direita">

                <button className='botao-notes'>
                    <FontAwesomeIcon icon={faArchive} className='icon' />
                    Archive Notes
                </button>

                <button className='botao-notes' onClick={() => clickDelete()}> 
                    <FontAwesomeIcon icon={faTrashCan} className='icon' />
                    Delete Notes
                </button>

            </nav >

        </>
    )
}

export default PainelInferiorDireita