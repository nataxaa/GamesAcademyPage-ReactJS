import { Container } from "./style";
import imagem1 from '../../imagens/imagem1.png'
import imagem2 from '../../imagens/cerebro.png'
import imagem3 from '../../imagens/nuvem.png'
import imagem4 from '../../imagens/bombas.png'


export function ThirdPage(){
    return(
        <Container>
            <h2>O que você vai aprender com os conteúdos da Games Academy ?</h2>
            <div className="card">
                <img src={imagem1} alt="imagem de um personagem"/>
                <p>
                    <h3>CHEGA DE PERDER!</h3>
                    Use todo o conhecimento das aulas para virar partidas e fazer
                    a diferença para seu time.
                </p>
            </div>
            <div className="card">
                <p>
                    <h3>NÃO PENSAR IGUAL UM NEWBIE</h3>
                    Entenda como os melhores jogadores do mundo tomam suas decisões durante o jogo.
                </p>
                <img src={imagem2} alt="imagem ilustrativa de um cerebro"/>
            </div>
            <div className="card">
                <img src={imagem3} alt="imagem ilustratitva de uma nuvem"/>
                <p>
                    <h3>NÃO MORRER DE LADO</h3>
                    Melhore seu posicionamentos nos mapas e entenda as posições que tem vantagem.
                </p>
            </div>
            <div className="card">
                <p>
                    <h3>GRANADA É PRA USAR</h3>
                    Saiba onde usar as granadas de maneira correta para vencer os rounds.
                </p>
                <img src={imagem4} alt="imagem ilutrativa de bombas"/>
            </div>
        </Container>
    )
}