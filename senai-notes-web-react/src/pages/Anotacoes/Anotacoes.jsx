import "./Anotacoes.css"
import imgcabecalho from "../../assets/imgs/logo.png"
import imglupa from "../../assets/imgs/Search.png"
import imgeng from "../../assets/imgs/Setting.png"
import imgpes from "../../assets/imgs/Vector.png"


function Anotacoes(){

return (

<>

    <main>
    <header>
        <div className="cabecalho">

     <h1 className="txt1">All Notes</h1>
    <input className="inptt" type="text" placeholder="Search by title, content, or tags…" />
    <img className="img-cabecalho" src={imgcabecalho} alt="" />
    <img className="img-lupa" src={imglupa} alt="" />
    <img className="img-engrenagem" src={imgeng} alt="" />
    <img className="img-pessoas" src={imgpes} alt="" />

        </div>

        <div className="quadrado-left">

        </div>
        
        <footer>
        
        
        </footer>
        </header>
    </main>
</>

)

}



export default Anotacoes;