import styled from "styled-components";

export const Container = styled.div`
    max-width: 1200px;
`;

export const P = styled.p`
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    margin-right: 20px;
    text-align: justify;
`;

export const P1 = styled.p`
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 800;
    text-align: justify;
    text-decoration: underline black;
`;

export const P2 = styled.p`
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
`;

export const Img = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    width: 235px;
    height: 300px;
    margin: 0;
    border-radius: 20px;
`;

export const ImageCard = styled.img`
    background-image: url("src/pages/images/img-mision.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 226px;
    margin: 0;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-around;
    
`;

export const H1 = styled.h1`
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 800;
    padding-bottom: 20px;
`;

export const Logo = styled.img`
    background-image: url("src/pages/images/Logo-AC.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 104px;
    height: 96px;
`;

export const LogoFooter = styled.img`
    background-image: url("src/pages/images/Logo-AC.png");
    background-repeat: no-repeat;
    background-size: contain;
    width: 200px;
    height: 180px;
`;

export const Fila = styled.div`
    display: flex;
    flex-direction: row;
    width: max-content;
`;

export const Ul = styled.ul`
    list-style: none;
    li{
        a{
            color: black;
            text-decoration: underline black;
            font-size: 12px;
            font-family: Arial, Helvetica, sans-serif;
        }
    }
`;

export const Lista = styled.div`
    ul{
        padding-left: 2rem;
        list-style-type: none;
        li {
            padding-left: 2rem;
            background-image: url("src/pages/images/star.svg");
            background-position: 0 0;
            background-size: 1.6rem 1.6rem;
            background-repeat: no-repeat;
        }
    }
`;

export const Nav = styled.nav`
    display: flex;
    width: 683px;
    ul {
        list-style: none;
        display: flex;
        gap: 1rem;
        a{
            text-decoration: none;
            color: inherit;
            display: inline-block;
            padding: 0.5rem;
            border-radius: 0.5rem;
            transition: background-color 0.3s;
            &:hover{
                background-color: #C59A4C;
            }
        }
    }
`;

export const FotoBanner = styled.img`
    display: block;
    width: 1920px;
    height: 562px;
`;

export const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: .25rem;
    height: 100%;
    //width: 33.3333333333%;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 1200px;
    margin: 20px auto;
    gap: 10px;
    row-gap: 20px;
    text-align: center;
    /* border: 2px solid red; */
`;

export const Copyright = styled.div`
    background-color: black;
    color: white;
    padding: 5px;
    width: 1140px;
    text-align: center;
    p{
        margin: auto;
    }
`;

export const Portada = styled.img`
    display: block;
    width: 1140px;
    //height: 562px;
`;

export const Button = styled.button`
    margin-left: 19em;
    padding: 0.5em 1.5em;
    background-color: #C59A4C;
    color: #fff;
`;

export const ButtonProductos = styled.button`
    margin-left: 1.5em;
    padding: 0.5em 1.5em;
    background-color: #C59A4C;
    color: #fff;
`;

export const Form = styled.form`
    form {
        //margin: 0 auto;
        width: 450px;
        padding: 1em;
        border: 1px solid #ccc;
        border-radius: 1em;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    form li + li {
        margin-top: 1em;
    }

    label {
        display: inline-block;
        width: 90px;
        text-align: left;
    }

    input, textarea {
        font-size: 1em;
        font-family: Arial, Helvetica, sans-serif;
        width: 300px;
        box-sizing: border-box;
        border: 1px solid #999;
    }

    input:focus, textarea:focus {
        border-color: #000;
    }

    textarea {
        vertical-align: top;
        height: 5em;
    }
`;