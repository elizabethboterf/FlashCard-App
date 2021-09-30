import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { deleteDeck, readDeck } from "../utils/api";
 import ErrorMessage from "../Common/ErrorMessage";
import Card from "./Card";
import NavBar from "../Common/NavBar";

function ViewDeck (){
    const {deckId}=useParams();
    console.log(deckId);
    const history=useHistory();
    const [deck, setDeck]= useState({});
    const [cardList, setCardList] =useState([]);
    const [refresh, setRefresh] = useState(false);
    const [error, setError] = useState();

    function makeList(deck){
        setDeck(deck);
        const list = deck.cards.map((card)=> {
            return(
                <li style={{margin: "10px", padding: "8px"}} key={`card${card.id}`}>
                    <Card card={card} refresh={refresh} setRefresh={setRefresh} />
                </li>
            );
        });
        setCardList(list);
    }

    useEffect(()=>{
        const abort = new AbortController();
        readDeck(deckId, abort.signal).then((deck)=>makeList(deck)).catch(setError);

        return ()=> abort.abort();
    }, [deckId, refresh]);
    console.log(deck);
    /*const list = deck.cards.map((card)=> {
        return(
            <li style={{margin: "10px", padding: "8px"}} key={`card${card.id}`}>
                <Card card={card} />
            </li>
        );
    });*/
    

    const handleDelete = ()=>{
        if(window.confirm("Are you sure you want to delete this deck?")){
            deleteDeck(deck.id);
            history.push("/");
        }
    };

    if (error){
        return <ErrorMessage error={error} />;  
    }
    
    const navLinks= [
        {dir: `/`,
        label: "Home"},
        {dir: `/decks/${deckId}`,
        label: `${deck.name}`}
    ];

    if(deck){
        return(
            <div>
                <NavBar links={navLinks} />
                <h1>{deck.name}</h1>
                <p>{deck.description}</p>
                <Link to={`/decks/${deck.id}/edit`} className="btn btn-primary" href="#">Edit</Link>
                <Link to={`/decks/${deck.id}/study`} className="btn btn-primary" href="#">Study</Link>
                <Link to={`/decks/${deck.id}/cards/new`} className="btn btn-primary" href="#">Add Card</Link>
                <button type="button" onClick={handleDelete} className="btn btn-danger"><span className="oi oi-trash"></span>Delete</button>

                <div>
                    <h1>Cards</h1>
                    <div className="column">
                        <ul style={{listStyleType: "none"}}>
                            {cardList}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }else{
        return("Not Found");
    }
}

export default ViewDeck;
