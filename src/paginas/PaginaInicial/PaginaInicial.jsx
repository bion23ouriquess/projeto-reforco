import { useNavigate } from 'react-router-dom';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../comum/componentes/Principal/Principal';

const PaginaInicial = () => {
    const navigate = useNavigate();


    return (
        <Principal titulo={"Página Inicial"}>
            <BotaoCustomizado cor="primaria" aoClicar={() => navigate('/lista-produtos')}>
                Lista Produtos
            </BotaoCustomizado>

            <BotaoCustomizado cor="secundaria" aoClicar={() => navigate("/exercicio-um")}>
                Exercício Um
            </BotaoCustomizado>

            <BotaoCustomizado cor="padrao" aoClicar={() => navigate("exercicio-dois")}>
                Exercicio Dois
            </BotaoCustomizado>
        </Principal>
    )
};

export default PaginaInicial;