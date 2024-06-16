import React from 'react'
import './NewRules.css'
import { IoMdCloseCircle } from "react-icons/io";

const NewRules = ({ showRules, toggle }) => {
    const style = { borderRadius: "50%", border: "1px solid white" }
    return (
        <div className={showRules ? "testing active  flex items-center justify-center flex-col" : "testing flex items-center justify-center flex-col"}>
            <h2 className='text-2xl text-yellow-300'>How to play dice game</h2>
            <div className='close' onClick={toggle}>
                <IoMdCloseCircle fontSize="1.75rem" style={style} className='testN' />

            </div>

            <hr className='border-yellow-300 h-[1px] w-[100%] mt-4  '></hr>
            <div className="text ">
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>After click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                <p>If you get wrong guess then  1 point will be dedcuted </p>
            </div>
        </div>
    )
}

export default NewRules
