import styled from 'styled-components';

type Container = {
    bgColor: string
}
export const Container = styled.div<Container>`
max-width: 800px;
margin: auto;
display: flex;
justify-content: center;

background-color: ${props => props.bgColor};
color: white;
padding: 20px;

span{
    font-size: 24px;
    margin-right: 10px
}

.link{
    border: 1px solid #ccc;
    background-color: #777;
    color:#fff;
    padding: 10px 15px;
    margin-right: 15px;

        &:hover{
            background-color: #fff;
            color: #333;
        }
}

@media(max-width: 500px){
    background-color: blue;
    flex-direction: column
}
`;

type BotaoProps = {
    bg: string;
    small?: boolean;
}
export const Botao = styled.button<BotaoProps>`
font-size: ${props => props.small ? '15px' : '30px'};
background-color: ${props => props.bg};
margin-right: 10px;
`;