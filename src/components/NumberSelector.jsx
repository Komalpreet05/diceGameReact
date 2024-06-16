import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({ selectedNumber, setSelectedNumber, error, setError }) => {
    const arr = [1, 2, 3, 4, 5, 6];
    console.log(selectedNumber);
    // const [isSelected, setIsSelected] = useState(false);

    // function selectionHandling(num) {
    //     setSelectedNumber(num);
    // }



    // useEffect(() => {
    //     setIsSelected()
    // })

    const numberSelectorHandler = (val) => {
        setSelectedNumber(val);
        setError("");
    }
    return (

        <div className='flex flex-col items-end '>
            <p className='text-red-600'>{error}</p>
            <div className='internal flex gap-[24px] '>
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
                        <Box
                            isSelected={
                                val === selectedNumber
                            }
                            key={i} onClick={() => numberSelectorHandler(val)}>{val}</Box>
                    ))
                }
            </div>
            <p className='text-[24px] font-bold'>Select Number</p>
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
color: ${(props) => !props.isSelected ? "black" : "white"};

`;
