import logo from '../../imagens/logo.png'
import video from '../../imagens/video.png'
import { Container, Header } from "./style";

export function FirtsPage(){
    return(
        <Container>
            <Header><h1>ACADEMY</h1> <p>ASSINE AGORA!</p></Header>
            <div className='body-page'>
                <h2>
                    <img src={logo} alt="imagem do logo" /> 
                    <div>
                        CHEGA DE PINAR NO CS:GO
                        <span>CONHEÇA A GAMES ACADEMY.</span> 
                    </div>
                </h2>
                <div className='information'>
                    <img src={video} alt="imagem do video"/>
                    <p>
                        Inscreva-se agora para receber 
                        <span> três aulas gratuitas</span>
                        <ul>
                            <li>A sensibilidade ideal - <span>o jeito certo de configurar sua mira</span></li>
                            <li>Melhorando sua <span>movimentção</span> dentro do mapa</li>
                            <li>Como fazer <span>granadas sem pegar pixel</span></li>
                        </ul>
                        <input type="text" placeholder='Coloque seu email aqui.' />
                        <button>ENVIAR</button>
                    </p>
                </div>
            </div>
        </Container>
    
    )
}