import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookCase from "./components/BookCase.js";
import Search from "./components/Search.js";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount = () => {
    BooksAPI.getAll().then(books => this.setState({ books }));
  };

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(resp => {
      book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books
          .filter(newBook => newBook.id !== book.id)
          .concat(book)
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookCase books={this.state.books} updateShelf={this.updateShelf} />
          )}
        />

        <Route
          exact
          path="/search"
          render={() => (
            <Search
              selectedBooks={this.state.books}
              updateShelf={this.updateShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;