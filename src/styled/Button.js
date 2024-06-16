import styled from "styled-components"
export const Button = styled.button`
    padding: 10px 18px;
    min-width:220px;
    background-color: black;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    color: white;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    z-index: 10000;
    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
    transition: 0.3s background ease-in;
        
    }

`
export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
z-index: 0;
&:hover{
        background-color: black;
        border: 1px solid transparent;
        color: white;
    }
`
