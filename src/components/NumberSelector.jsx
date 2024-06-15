import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const NumberSelector = () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const [selectedNumber, setSelectedNumber] = useState(null);
    console.log(selectedNumber);
    const [isSelected, setIsSelected] = useState(false);

    function selectionHandling(num) {
        setSelectedNumber(num)
    }



    // useEffect(() => {
    //     setIsSelected()
    // })
    return (
        <div className='flex gap-5  '>
            {/* {
                arr.map((e) => {
                    return (
                        <Box>{e}</Box>
                    )
                })
            } */}


            {/* or  */}

            {
                arr.map((val, i) => (
                    <Box key={i} onClick={() => selectionHandling(val)}>{val}</Box>
                ))
            }
        </div>
    )
}

export default NumberSelector

const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
cursor: pointer;    
background-color: ${(props) => props.isSelected ? "black" : "white"};

`;
