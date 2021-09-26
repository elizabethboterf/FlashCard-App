import React from "react";

function CardForm ({card, handleChange, handleSubmit, handleCancel}) {   
    console.log(card);
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label"
                style={{display: "inline-block"}} HTMLfor="front">Front</label>
                <textarea 
                    className="form-control"
                    id="front"
                    rows="5"
                    name="front"
                    onChange={handleChange}
                    value={card.front} />
            </div>
            <div className="mb-3">
                <label className="form-label" 
                style={{display: "inline-block"}}HTMLfor="back">Back</label>
                <textarea 
                    className="form-control"
                    id="back"
                    rows="5"
                    name="back"
                    onChange={handleChange}
                    value={card.back} />
            </div>
            <button onClick={handleCancel} className="btn btn-secondary">Cancel</button>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
    
};

export default CardForm;