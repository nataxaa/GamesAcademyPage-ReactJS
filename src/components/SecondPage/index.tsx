import { Container } from "./style";
import imagem_professores from '../../imagens/professores.png'

export function SecondePage(){
    return(
        <Container>
            <h2>+ 300 aulas com os melhores jogadores e coaches</h2>
            <img src={imagem_professores} alt="imagem dos professores do site" />
            <p>
                Conteudo de qualidade para todos os niveis de aprendizado. 
                <span> Para voce que chegou agora e não sabe de nada ainda, e para voce que ja manja do game </span>
                e quer melhorar mais ainda.
            </p>
        </Container>
    )
}