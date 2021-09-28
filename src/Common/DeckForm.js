import React from "react";

 function DeckForm({
 deck,
 handleCancel,
 handleSubmit,
 handleChange,
 })
 {
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                Name
                </label>
                <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={handleChange}
                //placeholder={deckName}
                defaultValue={deck.name}
                ></input>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                Deck Description
                </label>
                <textarea
                type="text"
                className="form-control"
                id="description"
                name="description"
                onChange={handleChange}
                //placeholder={deckDescription}
                defaultValue={deck.description}
                ></textarea>
            </div>
            <button
            onClick={handleCancel}
            className="btn btn-secondary"
            >
            Cancel
            </button>
            <button type="submit" className="btn btn-primary">
            Submit
            </button>
        </form>
 );
}

export default DeckForm;