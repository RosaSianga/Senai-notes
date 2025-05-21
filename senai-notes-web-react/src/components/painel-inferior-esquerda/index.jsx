import './painel-inferior-esquerda.css';

import imgNote from '../../assets/img/Image-notes.svg'
import { useEffect, useState } from 'react';

function PainelInferiorEsquerda({enviarNotaSelecionada}) {

    const [notes, setNotes] = useState([]);


    useEffect(() => {

        getNotas();

    }, []);


    const getNotas = async () => {

        let response = await fetch("http://localhost:3000/notes");

        if (response.ok == true) {

            let json = await response.json();

            setNotes(json);

        }

    }

    const clickNote = (note) => {

        enviarNotaSelecionada(note);

    }

    const ClickCriarNote = async () => {

        let estuturaNote = {
            userId: "1",
            title: "Teste novo note",
            description: "Teste",
            tags: [],
            date: new Date().toISOString()
        };


        let response = await fetch("http://localhost:3000/notes", {
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
                <button className='botao-new-note' onClick={ClickCriarNote}> + Create New Note </button>

                {notes.map(note => (

                    <div className='nota-incluida' onClick={() => clickNote(note)}>
                        <img src={imgNote} alt="Imagem da Nota" />
                        <div className="inf-tag">
                            <p>{note.title} </p>
                            <div className="tags-notas">
                                {note.tags.map(tag => (
                                    <p className='tag1'>{tag}</p>
                                ))}

                            </div>
                            <p>{new Date(note.date).toLocaleDateString()}</p>
                        </div>

                    </div>

                ))}

            </nav>
            
        </>
    )
}

export default PainelInferiorEsquerda