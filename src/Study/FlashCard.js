import React from "react";
import {useHistory} from "react-router-dom";

import FrontSide from "./FrontSide";
import BackSide from "./BackSide"

function FlashCard({cards, displayCard, setDisplayCard, initialDisplay}){
    const history=useHistory();
    const {current} = displayCard;
    const final= cards.length; 
    const restart={
        final: final,
        initial: initialDisplay
    };
    console.log(restart);

    /*if(current===final){    
        setTimeout(()=>{
                const result = window.confirm("Restart Cards? /n/nClick 'cancel' to return to the home page.");
                if (result) {
                    setDisplayCard(initialDisplay)
                    return <FlashCard 
                    cards={cards} 
                    displayCard={displayCard} 
                    setDisplayCard={setDisplayCard} 
                    initialDisplay={initialDisplay}/>
                    }else{
                    history.push("/");
                }
        }, 5.0*1000);
    }*/

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