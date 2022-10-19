import styled from "styled-components";

export const Container = styled.div`

height:100% ;
width:100% ;
background-color:var(--color-first-page) ;

div.information{
    margin-top: 12rem ;
    width:fit-content ;
    display:flex ;
    font-size:25px ;
    gap:3rem;
    color: #323432;

    img{
        box-shadow: 10px -10px #d90429 ;
    }

    ul{
        font-size:20px ;
    }
    span{
        font-weight:bold ;
    }

    input{
        width:93% ;
        padding:12px ;
        border-radius:5px ;
        border: 1px solid #323432;
        margin-top: 10px;
    }

    button{
        width:100% ;
        background-color:var(--color-button) ;
        color:var(--color-text-button) ;
        font-weight:bold ;
        padding:10px ;
        border:none ;
        border:2px ;
    }

}

div.body-page{
    padding: 0 12rem 6rem 12rem;
}

h2{
    z-index:0 ;
    width:fit-content ;
    display:flex ;
    gap: 1rem;
    position:relative ;
    top:10rem ;
    font-size:55px ;
    span{
        font-size:40px ;
    }
    div{
        display:flex ;
        flex-direction:column ;
    }
}


`

export const Header = styled.header`
position:fixed ;
color: var(--color-h1) ;
display: flex ;
height:2.5rem ;
justify-content:space-evenly ;
gap: 30rem;
background-color: var(--color-header) ;
align-items:center ;
padding:12px 0 ;
width:100% ;
z-index:1 ;
p{
    color: var(--color-text-button) ;
    background-color: var(--color-button) ;
    border-radius:20px ;
    padding:6px 40px ;
    font-weight:bold ;
    cursor: pointer;
    transition:0.2s ;
    :hover{
        margin-bottom:3px;
        filter: brightness(1.2) ;

    }
}


`