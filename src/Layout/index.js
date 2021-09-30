import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import CreateDeck from "./CreateDeck";
import DeckList from "./DeckList";
import EditCard from "../View-Deck/EditCard";
import AddCard from "../Common/AddCard";
import Study from "../Study/Study";
import EditDeck from "../View-Deck/EditDeck";
import ViewDeck from "../View-Deck/ViewDeck";
import {Switch, Route} from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        
        <Switch>
          <Route exact path="/" >
            <DeckList />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route exact path="/decks/:deckId" >
            <ViewDeck />
          </Route>
          <NotFound />
        </Switch>

        
      </div>
    </>
  );
}

export default Layout;
