import React from "react";
import {useHistory} from "react-router-dom";

import FrontSide from "./FrontSide";
import BackSide from "./BackSide"

function FlashCard({cards, current=1, isfront, setIsfront}){
    const history=useHistory();
    const final= cards.length; 
    console.log(final);

    if(current===final){    
        setTimeout(()=>{
                const result = window.confirm("Restart Cards? /n/nClick 'cancel' to return to the home page.");
                if (result) {
                return <FlashCard cards={cards} isfront={isfront} setIsfront={setIsfront}/>
                }else{
                history.push("/");
                }
        }, 5.0*1000);
    }

    const card = cards.find((card)=> (card.id===current));
    

    return(
        <div>
            <h3>Card {current} of {final}</h3>
            <FrontSide cards={cards} card={card} current={current} isfront={isfront} setIsfront={setIsfront}/>
        </div>
    );

}

export default FlashCard;