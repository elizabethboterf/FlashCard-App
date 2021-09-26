import React from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { deleteCard } from "../utils/api";

const Card = ({card}) =>{
    const {url}= useRouteMatch();
    const history=useHistory();

    /*const [card, setCard] = useState({});
    const [error, setError] = useState(undefined);

    useEffect(()=>{
        const abort = new AbortController();

        readCard(item.id, abort.signal).then(setCard).catch(setError);

        return()=> abort.abort();
    }, []);*/

    /*if (error){
        return <ErrorMessage error={error} />;  
    }*/
    const handleDelete=()=>{
        if(window.confirm("Are you sre you want to delete this card?")){
        deleteCard(card.id);
        history.go(0);
        }
    };

    return (
        <article>
            <div className="col-4">
                {card.front}
            </div>
            <div className="col-4">
                {card.back}
            </div>
            <Link to={`${url}/cards/${card.id}/edit`} className="btn btn-primary">Edit</Link>
            <button type="button" onClick={handleDelete} className="btn btn-danger"><span className="oi oi-trash">Delete</span></button>
        </article>
    );
}

export default Card;