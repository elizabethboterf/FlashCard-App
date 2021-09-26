import React from "react";
import FlashCard from "./FlashCard";
import BackSide from "./BackSide"

function FrontSide ({cards, card, current, isfront, setIsfront}){

    const handleFlip = ()=>{
        setIsfront(false);
    }
    
    return (
        <div>
           { isfront ? 
            (<div className="border">
                <p>{card.front}</p>
                <button className="btn btn-primary" onclick={handleFlip}>Flip</button>
            </div>)
            :
            (
            <BackSide  cards={cards} card={card} current={current} isfront={false} setIsfront={setIsfront} />
            )}  
        </div>
           
        );
}

export default FrontSide;