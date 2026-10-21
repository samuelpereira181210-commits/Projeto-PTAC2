import { useState } from "react";
import "./App.css";

function mural() {
    const [ideias, setIdeias] = useState([]);
    const [novaIdeia, setNovaIdeia] = useState("");
    const [erro, setErro] = useState("");
}

function digitacao(event){
    setNovaIdeia(event.target.value)
    setErro("")
}

function adicionar(event){
    event.preventDefault()

if(novaIdeia.trim === ""){
    setErro("Erro. Você não pode adicionar apenas Espaços ou nada. Escreva algo.")
    return
}

const ideias = {id: Date.now(), texto: novaIdeia.trim(), feito: false}
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

