import React from "react";
import FlashCard from "./FlashCard";

function BackSide({cards, card, current, isfront, setIsfront}){
    let next=current;
    const handleFlip = ()=>{
        setIsfront(true);
    }
    const handleNext = ()=>{
        setIsfront(true);
        next=current+1;
        return (<FlashCard cards={cards} current={current+1} front={true}/>);
    }
    
    return (
        <div>
           {(!isfront && next === current) ? 
            (<div className="border">
                <p>{card.back}</p>
                <button className="btn btn-primary" onclick={handleFlip}>Flip</button>
                <button className="btn btn-secondary" onclick={handleNext}>Next</button>
            </div>)
            :
            (
            <FlashCard  cards={cards} current={next} isfront={isfront} setIsfront={setIsfront}/>
            )}  
        </div>
    )
}

export default BackSide;