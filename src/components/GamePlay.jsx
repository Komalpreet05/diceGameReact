import React from 'react'
import TotalScore from './TotalScore'
import styled from 'styled-components'
import NumberSelector from './NumberSelector'

const GamePlay = () => {
    return (
        <main>
            <div>
                <TotalScore />
                <NumberSelector />
            </div>
        </main>
    )
}

export default GamePlay

const ScoreContainer = styled.div`
h1{

}
`
