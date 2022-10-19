import imagem from '../../imagens/gamesclub.png'
import { Container } from './style'



export function Footer(){
    return(
        <Container>
            <img src={imagem} alt="imagem do logo" />
        </Container>
    )
}