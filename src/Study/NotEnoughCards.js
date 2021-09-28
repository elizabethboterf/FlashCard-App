import React from "react";
import {Link} from "react-router-dom";

function NotEnoughCards ({cards, deck}){
    return (
        <div>
            <h2>Not enough cards</h2>
            <p>You need atleast 3 cards to study. There are {cards.length} card(s) in this deck.</p>
            <Link to={`/decks/${deck.id}/cards/new`}>Add Cards</Link>
             
        </div>
            
        );
    }

export default NotEnoughCards;