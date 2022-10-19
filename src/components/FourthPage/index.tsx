import { Container } from "./style";
import imagem1 from '../../imagens/patente.png'
import imagem2 from '../../imagens/baner.jpeg'


export function FourthPage(){
    return(
        <Container>
            <div className="top-information">
                <div>
                    <h2>ALCANCE O TÃO DESEJADO GLOBAL</h2>
                    <p>
                        Garantimos que se você manter uma <span>rotina de estudo</span> e treino
                        acompanhando as nossas aulas irá se tornar Global no CS:GO.
                    </p>
                </div>
                <img src={imagem1} alt="patente de cs:go" />
            </div>
            <img src={imagem2} alt="baner da games academy"/>
            <h2>Assine a Games Academy por <span className="price">apenas R$29,90</span> e aproveite benefícios exclusivos na Gamers Club.</h2>
            <div className="button">
                <button className="acess">ACESSE AS AULAS</button>
                <button className="assinar">ASSINE AGORA!</button>
            </div>

            
        </Container>
    )
}