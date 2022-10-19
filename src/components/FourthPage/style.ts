import styled from "styled-components";



export const Container = styled.div`

padding: 4rem 12rem 6rem 12rem;
background-color:#FFF ;
display:flex ;
flex-direction:column ;
align-items:center ;
gap:4rem;

footer{
        background-color: var(--color-header) ;
        
    }

div.top-information{
    display:flex ;
    align-items:center ;
    gap:2rem;
    p{
        font-size:18px ;
        span{
            font-weight:bold ;
        }
    }
    h2{
        font-weight:bold ;
        font-size:32px ;
        width:20rem ;
    }
}
span.price{
    color: var(--color-button) ;

}
h2{
    font-size:37px ;
    text-align:center ;
    width:50rem ;
}

div.button{
    display:flex ;
    gap:4rem;
    button.acess{
        padding: 8px 90px;
        background-color:var(--color-button) ;
        font-weight:bold ;
        font-family: 'Oswald' ;
        font-size:16px ;
        border:none ;
    }
    button.assinar{
        font-family: 'Oswald' ;
        font-size:16px ;
        font-weight:bold ;
        padding: 8px 90px;
        border:2px solid var(--color-button) ;
        background-color:#FFF ;
    }
    
}
`