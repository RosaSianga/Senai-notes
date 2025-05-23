import './notes.css';
import logo from '../../assets/img/logo.svg';
import archive from '../../assets/img/Archive.svg';
import lixeira from '../../assets/img/Delete.svg';
import home from '../../assets/img/Home.svg';
import perfil from '../../assets/img/Perfil.svg';
import search from '../../assets/img/Search.svg';
import settings from '../../assets/img/Settings.svg';
import tag from '../../assets/img/Tag.svg';
import setinha from '../../assets/img/Setinha.svg';
import imgNote from '../../assets/img/Image-notes.svg'
import imgdescricao from '../../assets/img/Rectangle 44.svg'
import imgtag from '../../assets/img/Tag.svg'
import imgrelogio from '../../assets/img/Circle Clock.svg'
import arquivo from '../../assets/img/Archive.svg'
import { useEffect, useState } from 'react';


function Notes ({ enviarNota, tagSelecionada, somenteArquivadas, atualizarLista })  {


    const [setNotes] = useState([]);


    // useEffect para carregar as notas ao montar o componente
  useEffect(() => { 
    getNotes(); 
  }, []);  // executa apenas uma vez, ao montar

  // Recarrega as notas sempre que a tag selecionada mudar
  useEffect(() => { 
    getNotes(); 
  }, [tagSelecionada]);

  // Recarrega as notas sempre que o filtro de arquivadas mudar
  useEffect(() => { 
    getNotes(); 
  }, [somenteArquivadas]);

  // Recarrega as notas sempre que a flag de atualização mudar
  useEffect(() => { 
    getNotes(); 
  }, [atualizarLista]);

    useEffect(() => {

        getNotes();

    }, []);

   // Função que busca todas as notas e aplica os filtros de tag e arquivamento
  const getNotes = async () => {
    try {
      const response = await fetch('http://localhost:3000/notes');
      let data = await response.json();

      // Filtra por tag, se houver uma selecionada
      if (tagSelecionada) {
        data = data.filter(note =>
          note.tags.map(t => t.trim()).includes(tagSelecionada)
        );
      }
      // Filtra somente as notas arquivadas, se solicitado
      if (somenteArquivadas) {
        data = data.filter(note => note.archived === true);
      }

      // Atualiza o estado com as notas filtradas
      setNotes(data);
    } catch (error) {
      console.error("Erro ao buscar notas:", error);
      toast.error("Não foi possível carregar as notas.");
    }
  }

        const CreateNewNotes = async () => {

            try {
           
            let response = await fetch("http://localhost:3000/tags", {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(
                    {
                        userId: "1",                          // ID fixo de usuário por enquanto
                        title: "Nova anotação",               // Título padrão
                        description: "Escreva aqui sua descrição", // Descrição padrão
                        tags: [],                             // Sem tags iniciais
                        image: "assets/sample.png",           // Imagem padrão
                        date: new Date().toISOString()        // Data atual em ISO
                    })

            });

            if (response.ok) {
        // Notifica sucesso e recarrega as notas
        toast.success("Anotação criada com sucesso!");
        await getNotes();
      } else {
        // Notifica erro se não retornar 2xx
        toast.error("Erro ao criar uma nota, tente novamente");
      }
    } catch (error) {
      console.error("Erro ao criar nota:", error);
      toast.error("Erro de rede ao criar a nota.");
    }
  }



    return (
        <>

            <div className="tela">
                <header className='notas-esquerda'>

                    <img className="logo" src={logo} alt="Logo Senai Notes" />

                    <button className='botao-notes'>
                        <img src={home} alt="Imagem home" />
                        All Notes
                        <img className='seta' src={setinha} alt="Imagem Seta" />
                    </button>

                    <button className='botao-notes'>
                        <img src={archive} alt="Imagem arquivo" />
                        Archived Notes
                    </button>

                    <div className="tags">
                        <p>Tags</p>

                        <button className='botao-notes'>
                            <img src={tag} alt="Imagem da Tag" />
                            Cooking
                        </button>
                    </div>



                </header>

                <main className='notas-direita'>

                    <div className="superior">
                        <h1>All Notes</h1>

                        <div className="pesquisa">
                            <img src={search} alt="Imagem pesquisa" />
                            <input onKeyUp={event => onKeyUp(event)} className="input" type="text" placeholder="Search by title, content or tags..." />

                            <img src={settings} alt="Imagem configuração" />
                            <img src={perfil} alt="Imagem do perfil" />
                        </div>

                    </div>

                    <div className="inferior">

                        <div className="inferior-esquerda">
                            <button className='botao-new-note' onClick={() => CreateNewNotes()}> + Create New Note </button>

                            <div className='nota-incluida'>
                                <img src={imgNote} alt="Imagem da Nota" />
                                {Notes.map(Note =>

                                    <div className="inf-tag">

                                        <p>{Note.title}</p>
                                        <p>{Note.tags}</p>
                                        <p>{Note.description}</p>

                                    </div>



                                )}
                            </div>

                        </div>

                        <div className="inferior-centro">

                            <img className='img-centro' src={imgdescricao} alt="" />
                            <img className='img-tag-centro' src={imgtag} alt="" />
                            <img className='img-relogio-centro' src={imgrelogio} alt="" />
                            <input className='titulo-centro' type="text" />
                            <p className='tags-centro'>Tags</p>
                            <p className='Last-edited-centro'>Last edited</p>
                            <p className='dev'>Dev, React</p>
                            <p className='data'>29 Oct 2024</p>



                            <p className='titulo-segundario'>Key performance optimization techniques:</p>
                            <p className='code'>1. Code Splitting</p>
                            <p className='usereact'>- Use React.lazy() for route-based splitting</p>
                            <p className='implement'>- Implement dynamic imports for heavy components</p>
                            <p className='titulo-terciario'>2. Memoization</p>
                            <p className='useMemo'>- useMemo for expensive calculations</p>
                            <p className='useCall'>- useCallback for function props</p>
                            <p className='titulo-quatro'>3. Virtual List Implementation</p>
                            <p className='window'>- Use react-window for long lists</p>
                            <p className='implement2'>- Implement infinite scrolling</p>
                            <p className='todo'>TODO: Benchmark current application and identify bottlenecks</p>

                            <button className='save'>Save note</button>
                            <button className='cancel'>Cancel</button>


                        </div>

                        <div className="inferior-direita">

                            <img className='lixo' src={lixeira} alt="" />
                            <img className='arquivo' src={arquivo} alt="" />
                            <button className='arquive'>Archive note</button>
                            <button className='delete'>Delete Note</button>

                        </div>
                    </div>

                </main>

                <footer></footer>

            </div>

        </>

    )
}

export default Notes
