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

            getConteudoNota();         
        }
    }, [recebeNotaSelecionada]);


    const getConteudoNota = async () => {

        let response = await fetch(`https://apisenainotesgrupo5temp.azurewebsites.net/api/Nota/buscarNota/${recebeNotaSelecionada.idNotas}`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        });

        if (response.ok == true) {

            let json = await response.json();

            setConteudo(json.conteudo);
        } else {
            alert("Erro ao buscar conteudo da nota")
        }
    }

    const clickSalvar = async () => {

        let userId = localStorage.getItem("meuId");

        const response = await fetch(`https://apisenainotesgrupo5temp.azurewebsites.net/api/Nota/editarNota/${recebeNotaSelecionada.idNotas}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                titulo,
                conteudo,
                dataEdicao: new Date().toISOString(),
                imgUrl: " ",
                tags: tags,
                idUsuario: userId
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
                        Data Criação
                    </p>
                    <p className='tag-descricao'>{new Date(recebeNotaSelecionada?.dataCriacao).toLocaleDateString()}</p>
                </div>

                <div className="inf-descricao">
                    <p className='tag-descricao'>
                        <FontAwesomeIcon icon={faClock} className='icon' />
                        Data Edição
                    </p>
                    <p className='tag-descricao'>{new Date(recebeNotaSelecionada?.dataEdicao).toLocaleDateString()}</p>
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