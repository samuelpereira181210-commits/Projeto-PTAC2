import { useState } from "react";
import "./App.css";

function App() {
    const [ideias, setIdeias] = useState([]);
    const [novaIdeia, setNovaIdeia] = useState("");
    const [erro, setErro] = useState("");


function digitacao(event){
    setNovaIdeia(event.target.value)
    setErro("")
}

function adicionar(event){
    event.preventDefault()

if(novaIdeia.trim() === ""){
    setErro("Erro. Você não pode adicionar apenas Espaços ou nada. Escreva algo.")
    return
}

const ideia = {id: Date.now(), texto: novaIdeia.trim(), feito: false}
setIdeias((atual) => [...atual, ideia])
setNovaIdeia("")
setErro("")
}

function inverteFeito(id){
    setIdeias((atual) => 
        atual.map((ideia) =>
            ideia.id === id ? {...ideia, feito: !ideia.feito} : ideia
        )
    )
}

function remover(id){
    setIdeias((atual) => atual.filter((ideia) => ideia.id !== id))
}

const total = ideias.length;
const concluidas = ideias.filter((ideia) => ideia.feito).length;
const textoIdeias = total === 1 ? "ideia" : "ideias";
const textoConcluidas = concluidas === 1 ? "concluída" : "concluídas";

return(

    <>
        <form className="formulario" onSubmit={adicionar}>
            <input
            className="Campo"
            type="text" 
            value={novaIdeia}
            onChange={digitacao}
            placeholder="Ex: Fazer Bolo de Morango..."
            />
            <button className="btnAdcionar" type="submit">Adicionar</button>

        </form>

        {erro && <p className="erro">{erro}</p>}

        <ul className="lista">
            {ideias.map((ideia) => (
                <li key={ideia.id} className="item">
                    <label className="rotulo">
                        <input 
                        type="checkbox"
                        checked={ideia.feito}
                        onChange={() => inverteFeito(ideia.id)}
                        />
                        <span className={ideia.feito ? "textoFeito" : "texto"}>
                            {ideia.texto}
                        </span>
                    </label>
                    <button 
                    className="btnRemover" 
                    type="button" 
                    onClick={() => remover(ideia.id)}>x</button>
                </li>
            ))}
        </ul>

        <footer className="rodape">
            {`${total} ${textoIdeias} no painel · ${concluidas} ${textoConcluidas}`}
        </footer>
    </>
)
}
export default App;