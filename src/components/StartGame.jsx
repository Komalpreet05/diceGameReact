import React from 'react'
import styled from 'styled-components';
import { Button } from '../styled/Button';


const StartGame = ({ toggle }) => {
    return (
        <div>
            <Container>
                <div>
                    <img src='/images/dices.png' alt='dices' />
                </div>
                <div className='content'>
                    <h1>Dice Game</h1>
                    <Button onClick={toggle}>Play Now</Button>
                </div>
            </Container>
        </div>
    )
}

export default StartGame

const Container = styled.div`
max-width: 1180px;
display: flex;
margin: 0 auto;
height: 100vh;
align-items: center;

.content h1{
    font-size: 96px;
    font-weight: bold;
    white-space: nowrap ;
    padding: 0 !important;
    margin: 0;
}
`

