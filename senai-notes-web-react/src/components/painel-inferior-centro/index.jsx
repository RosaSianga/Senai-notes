import './painel-inferior-centro.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';


function PainelInferiorCentro({ recebeNotaSelecionada }) {

    const [title, setTitle] = useState("");
    const [tags, setTags] = useState("");
    const [description, setDescription] = useState("");


    useEffect(() => {
        if (recebeNotaSelecionada) {
            setTitle(recebeNotaSelecionada.title);
            setTags(recebeNotaSelecionada.tags.join(", "));
            setDescription(recebeNotaSelecionada.description);
        }
    }, [recebeNotaSelecionada]);


    const ClickSalvar = async () => {


        


    }

    return (
        <>
            <nav className="inferior-centro">

                <div className="imagem"></div>

                <input type="text" className='titulo' placeholder='Insira o titulo da nota' value={title} />

                <div className="inf-descricao">
                    <p className='tag-descricao'>
                        <FontAwesomeIcon icon={faTags} className='icon' />
                        Tags
                    </p>
                    <input type="text" className='tag-descricao' value={tags} />
                </div>

                <div className="inf-descricao">
                    <p className='tag-descricao'>
                        <FontAwesomeIcon icon={faClock} className='icon' />
                        Last Edited
                    </p>
                    <p className='tag-descricao'>{new Date(recebeNotaSelecionada?.date).toLocaleDateString()}</p>
                </div>

                <div className="detalhe">
                    <textarea className="texto" name="texto" value={description}> </textarea>
                </div>


                <div className="area-botoes">
                    <button className='botao-save'> Salve Notes onClick={() => clickSalvar()} </button>

                    <button className='botao-cancel'> Cancel </button>

                </div>

            </nav>



        </>
    )
}

export default PainelInferiorCentro