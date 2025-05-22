import './painel-inferior-centro.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';


function PainelInferiorCentro({ recebeNotaSelecionada }) {

    const [titulo, setTitulo] = useState("");
    const [tags, setTags] = useState("");
    const [conteudo, setConteudo] = useState("");


    useEffect(() => {
        if (recebeNotaSelecionada) {
            setTitulo(recebeNotaSelecionada.titulo);
            setTags(recebeNotaSelecionada.tags.map(tag => tag.nome).join(", "));
            setConteudo(recebeNotaSelecionada.conteudo);
        }
    }, [recebeNotaSelecionada]);


    const clickSalvar = async () => {

        const response = await fetch(`http://localhost:3000/notes/${recebeNotaSelecionada.idNotas}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...recebeNotaSelecionada,
                titulo,
                conteudo,
                tags: tags.split(",").map(t => t.trim()),
                dataEdicao: new Date().toISOString()
            })
        });

        if (response.ok == true) {
            alert("Anotação atualizada com sucesso");
            window.location.reload()

        } else {
            alert("Erro ao atualizar nota");
        }
    }

    return (
        <>
            <nav className="inferior-centro">

                <div className="imagem"></div>

                <input type="text" className='titulo' placeholder='Insira o titulo da nota' value={titulo} onChange={event => setTitulo(event.target.value)} />

                <div className="inf-descricao">
                    <p className='tag-descricao'>
                        <FontAwesomeIcon icon={faTags} className='icon' />
                        Tags
                    </p>
                    <input type="text" className='tag-descricao' value={tags} onChange={event => setTags(event.target.value)} />
                </div>

                <div className="inf-descricao">
                    <p className='tag-descricao'>
                        <FontAwesomeIcon icon={faClock} className='icon' />
                        Last Edited
                    </p>
                    <p className='tag-descricao'>{new Date(recebeNotaSelecionada?.dataCriacao).toLocaleDateString()}</p>
                </div>

                <div className="detalhe">
                    <textarea className="texto" name="texto" value={conteudo} onChange={event => setConteudo(event.target.value)} > </textarea>
                </div>


                <div className="area-botoes">
                    <button className='botao-save' onClick={() => clickSalvar()}> Salve Notes </button>

                    <button className='botao-cancel'> Cancel </button>

                </div>

            </nav>



        </>
    )
}

export default PainelInferiorCentro