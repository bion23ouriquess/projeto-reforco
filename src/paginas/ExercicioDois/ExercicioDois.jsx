import { useState } from "react";
import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";


function ExercicioDois() {
    const [dino, setDino] = useState('')

    const dinos = ["Espinossauro", "Rex", "Braquiossauro", "Anquilossauro",
        "Estegossauro", "Velocirraptor", "Acrocantossauro", "Giganotossauro",
        "Carcarodontossauro", "Triceratops"];

    const dinoAleatorio = () =>
        dinos[Math.floor(Math.random() * dinos.length)];

    function carregarDino() {
        setLoading(true);
        setDino('');
        setTimeout(() => {
            setDino(dinoAleatorio());
            setLoading(false);
        }, 800);


        return (
            <Principal titulo="Jogo do Dino">
                <BotaoCustomizado
                    aoClicar={carregarDino}      
                    cor="primaria"
                    disabled={loading}           
                >
                    {loading
                        ? 'Carregando...'
                        : (dino || 'Clique para sortear')}
                </BotaoCustomizado>
            </Principal>
        );
    }
};

export default ExercicioDois;