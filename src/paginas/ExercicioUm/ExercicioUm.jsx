import React, { useState } from 'react';
import Principal from '../../comum/componentes/Principal/Principal';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import './ExercicioUm.css';

function ExercicioUm() {

    // Verificando a idade: Peça ao usuário sua idade e, em seguida, exiba uma mensagem que diga se ele é maior de idade ou menor de idade.
    const [idade, setIdade] = useState('');
    const [mensagem, setMensagem] = useState('');

    const verificarIdade = () => {
        const idadeNum = Number(idade)

        if (isNaN(idadeNum) || idadeNum < 0) {
            setMensagem('Idade inválida.')
        } else if (idadeNum >= 18) {
            setMensagem('Você é maior de idade.')
        } else {
            setMensagem('Você é menor de idade.')
        }
    }



    return <Principal titulo={"Verificar Idade"}>

        <input
            className='input-idade'
            type="text"
            placeholder='Digite um número' v
            alue={idade}
            onChange={e => setIdade(e.target.value)} />
        <BotaoCustomizado aoClicar={verificarIdade} >Verificar</BotaoCustomizado>
        {mensagem && <p>{mensagem}</p> }
    </Principal>
}

export default ExercicioUm;