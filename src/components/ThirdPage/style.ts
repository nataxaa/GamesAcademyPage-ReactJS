import styled from "styled-components";
import image from '../../imagens/background-page.jpeg'


export const Container = styled.div`

padding: 4rem 12rem 6rem 12rem;
display:flex ;
flex-direction:column ;
align-items:center ;
background-image: url(${image}) ;
color: #FFF;

h2{
    font-size: 45px ;
    width:45rem ;
    text-align:center ;
    border-bottom: 1px solid #FFF ;
    padding-bottom: 1rem ;
    margin-bottom:3rem ;
}
div.card{
    display:flex ;
    align-items:center ;
    gap:4rem;
    p{
        display:flex ;
        flex-direction:column ;
        width:25rem ;
        font-size: 18px ;
        gap:13px;
        h3{
            font-size:25px ;
        }
    }
}
`