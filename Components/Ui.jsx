import styled from '@emotion/styled';

export const Espacio = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const EspacioDivs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const EspacioSensores = styled.div`
    display: flex;
    align-items: center;
    
`

export const Titulo = styled.h2`
    font-size: 3rem;
    color: white;
    width: 100%;
    text-align: center;
`

export const Subtitulos = styled.h2`
    font-size: 3rem;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
`

export const Button = styled.button`
    padding: 4rem 3rem;
    font-size: 2rem;
    font-weight: bold;
    border-radius: 3rem;
    border-style: none;
    background-color: ${props => props.bgColor};
    color: white;
    :hover {
        cursor: pointer;
    }
    :first-of-type {
        margin-bottom: 2rem;
    }
`
export const ButtonMusic = styled.button`
    padding: 4rem 3rem;
    font-size: 2rem;
    font-weight: bold;
    border-radius: 3rem;
    border-style: none;
    background-color: #E3C770;
    color: white;
    :hover {
        cursor: pointer;
    }
    :last-of-type {
        margin: 2rem;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
        display: none;
    }
    input {
        margin-bottom: 1.5rem;
        padding: 1rem;
        border-radius: 1rem;
        border-style: none;
        font-size: 1.5rem;
    }
    button {
        padding: 2rem;
        width: 13rem;
        border-radius: 1rem;
        border-style: none;
        background-color: #2E5090;
        color: white;
        font-size: 1.75rem;
        font-weight: bold;
    }
`
export const ErrorLogin = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    background-color: #B50000;
    width: 100%;
    padding: 1rem 0;
    text-align: center;
    border-radius: .75rem;
    border-style: none;
`

export const Temperatura = styled.h2`
    font-size: 1.5rem;
    padding-left: .5rem;
    
`

export const Texto = styled.p`
    font-size: 1.5rem;
`
