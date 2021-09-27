import React from "react";
import FlashCard from "./FlashCard";
import BackSide from "./BackSide"

function FrontSide ({cards, card, restart, displayCard, setDisplayCard}){
    const {front}=displayCard;

    const handleFlip = (event)=>{
        event.preventDefault();
        setDisplayCard({
            ...displayCard,
            front: false
        });
    }
    console.log(card);
    
    return (
        <div>
           { front ? 
            (<div className="border">
                <p>{card.front}</p>
                <button className="btn btn-primary" onClick={handleFlip}>Flip</button>
            </div>)
            :
            (
            <BackSide  cards={cards} card={card} restart={restart} displayCard={displayCard} setDisplayCard={setDisplayCard} />
            )}  
        </div>
           
        );
}

export default FrontSide;