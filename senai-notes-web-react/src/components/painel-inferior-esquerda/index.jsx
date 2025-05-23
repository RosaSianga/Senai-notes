import './painel-inferior-esquerda.css';

import imgNote from '../../assets/img/Image-notes.svg'
import { useEffect, useState } from 'react';

function PainelInferiorEsquerda({ enviarNotaSelecionada, tagSelecionada, enviarTextoPesquisa }) {

    const [notes, setNotes] = useState([]);


    useEffect(() => {

        getNotas();

    }, []);

    useEffect(() => {

        getNotas();

    }, [tagSelecionada]);


    const getNotas = async () => {
debugger
        let userId = localStorage.getItem("meuId");

        let response = await fetch("https://apisenainotesgrupo5temp.azurewebsites.net/api/Nota/listar/" + userId, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        });

        if (response.ok == true) {

            let json = await response.json();

            if (tagSelecionada) {
                json = json.filter(note => note.tags.map(tag => tag.nome));

            }

            if(enviarTextoPesquisa) {
                json = json.filter(note => note.startsWith(texto));
            }

            setNotes(json);
        }
    }

    const clickNote = (note) => {

        enviarNotaSelecionada(note);

    }

    const ClickCriarNote = async () => {

        let userId = localStorage.getItem("meuId");

        let estuturaNote = {
            titulo: "Teste novo note",
            conteudo: "Descricao nota",
            dataCriacao: new Date().toISOString(),
            tags: "",
            idUsuario: userId
        };

        let response = await fetch("https://apisenainotesgrupo5temp.azurewebsites.net/api/Nota/cadastrarNota", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(
                estuturaNote
            )
        });

        console.log(response);

        if (response.ok == true) {
            alert("Nova anotação criado com sucesso");
            await getNotas();
        } else {
            alert("Nota não criada");
        }

    }

    return (
        <>
            <nav className="inferior-esquerda">
                <button className='botao-new-note' onClick={() => ClickCriarNote()}> + Create New Note </button>

                {notes.map(note => (

                    <div className='nota-incluida' onClick={() => clickNote(note)}>
                        <img src={imgNote} alt="Imagem da Nota" />
                        <div className="inf-tag">
                            <p>{note.titulo} </p>
                            <div className="tags-notas">
                                {note.tags.map(tag => (
                                    <p className='tag1'>{tag.nome}</p>
                                ))}

                            </div>
                            <p>{new Date(note.dataCriacao).toLocaleDateString()}</p>

                        </div>

                    </div>

                ))}

            </nav>

        </>
    )
}

export default PainelInferiorEsquerda