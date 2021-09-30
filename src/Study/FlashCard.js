import React from "react";
import FrontSide from "./FrontSide";

function FlashCard({cards, displayCard, setDisplayCard, initialDisplay}){
    const {current} = displayCard;
    const final= cards.length; 
    const restart={
        final: final,
        initial: initialDisplay
    };

    const card = cards.find((card)=> (card.id===current));

    return(
        <div>
            <h3>Card {current} of {final}</h3>
            <FrontSide 
            cards={cards} 
            card={card}
            restart={restart} 
            displayCard={displayCard} 
            setDisplayCard={setDisplayCard}/>
        </div>
    );

}

export default FlashCard;