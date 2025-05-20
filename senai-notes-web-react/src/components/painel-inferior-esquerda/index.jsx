import './painel-inferior-esquerda.css';

import imgNote from '../../assets/img/Image-notes.svg'
import { useEffect, useState } from 'react';

function PainelInferiorEsquerda() {

    const [tag, setTag] = useState([]);
    const [notes, setNotes] = useState([]);
    const [noteSelecionado, SetNoteSelecionado] = useState([]);


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
        SetNoteSelecionado(note);

    }

    return (
        <>
            <nav className="inferior-esquerda">
                <button className='botao-new-note'> + Create New Note </button>

                {notes.map(note => (

                    <div className='nota-incluida' >
                        <img src={imgNote} alt="Imagem da Nota" onClick={() => clickNote(note)}/>
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