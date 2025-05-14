import "./Anotacoes.css"
import imgcabecalho from "../../assets/imgs/logo.png"



function Anotacoes(){

return (

<>


    <header className="cabecalho">
    <h1 className="txt1">All Notes</h1>
    <input className="inptt" type="text" placeholder="Search by title, content, or tags…"/>
    <img className="img-cabecalho" src={imgcabecalho} alt="" />

    </header>
</>

)

}



export default Anotacoes;