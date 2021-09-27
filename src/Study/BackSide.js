import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import FlashCard from "./FlashCard";

function BackSide({cards, card, restart, displayCard, setDisplayCard}){
    const history=useHistory();
    //const [isFinal, setIsFinal]= useState(false);
    const {front, current}= displayCard;
    const {final, initial}= restart;
    let next=current;
    
    if(current===final){ 
         //setIsFinal(true);
         //console.log(isFinal);  
        setTimeout(()=>{
                const result = window.confirm("Restart Cards? Click 'cancel' to return to the home page.");
                if (result) {
                    setDisplayCard(initial)
                    return <FlashCard 
                    cards={cards} 
                    displayCard={displayCard} 
                    setDisplayCard={setDisplayCard} 
                    initialDisplay={initial}/>
                    }else{
                    history.push("/");
                }
        }, 3.0*1000);
    }
    //console.log(isFinal);

    const handleFlip = (event)=>{
        event.preventDefault();
        setDisplayCard({
            ...displayCard,
            front: true
        });
    }
    const handleNext = (event)=>{
        event.preventDefault();
        let next=current+1;
        setDisplayCard({
            front: true,
            current: next
        });
    }
    
    return (
        <div>
           {(!front && next === current) ? 
            (<div className="border">
                <p>{card.back}</p>
                <button className="btn btn-primary" onClick={handleFlip}>Flip</button>
                <button  className="btn btn-secondary" onClick={handleNext}>Next</button>
            </div>)
            :
            (
            <FlashCard  cards={cards} displayCard={displayCard} setDisplayCard={setDisplayCard}/>
            )}  
        </div>
    )
}

export default BackSide;