import React, { useState } from 'react'
import TotalScore from './TotalScore'
import styled from 'styled-components'
import NumberSelector from './NumberSelector'
import RollDice from "./RollDice"
import { Button, OutlineButton } from '../styled/Button';
import NewRules from './NewRules'


const GamePlay = ({ showRules, setShowRules, togglesRules }) => {
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [currentDice, setCurrentDice] = useState(1);
    const [score, setScore] = useState(0);
    const [error, setError] = useState("");
    // const [showRules, setShowRules] = useState(false);

    const genearteRandomNum = (min, max) => { return Math.floor(Math.random() * (max - min) + min) };
    const rollDice = () => {
        if (!selectedNumber) {
            setError("You have not selected any number");
            return;
        }

        const randomNum = genearteRandomNum(1, 7);
        setCurrentDice(randomNum);

        if (selectedNumber == randomNum) {
            setScore(prev => prev + randomNum);

        }
        else {
            setScore(prev => prev - 1);
        }
        setSelectedNumber(null);

    }

    function resetScore() {
        setScore(0);
    }


    return (
        <MainContainer>
            <div className='top-section'>
                <TotalScore score={score} />
                <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError} />
            </div>
            <RollDice currentDice={currentDice} rollDice={rollDice} />
            <div className='flex flex-col justify-center gap-[10px] items-center mt-10'>
                <OutlineButton onClick={resetScore}>Reset</OutlineButton>
                <Button onClick={togglesRules}>
                    {
                        showRules ? "Hide Rules" : "Show Rules"
                    }
                </Button>
            </div>
            {showRules && <NewRules showRules={showRules} toggle={togglesRules} setShowRules={setShowRules} />}
            {/* <NewRules showRules={showRules} toggle={togglesRules} setShowRules={setShowRules} /> */}

        </MainContainer>
    )
}

export default GamePlay

const MainContainer = styled.div`
max-width: 1180px;
margin: 0 auto;
margin-top: 40px;
.top-section{
    display: flex;
    justify-content: space-between;
    align-items: end;
}
.testNew{
    scale: 1;
}

`
