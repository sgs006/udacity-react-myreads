import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

class Search extends Component {
    state = {
        query: "",
        books: [],
        newList: []
    };

    updateQuery = query => {
        this.setState({ query: query }, this.setQuery);
    };

    setQuery = () => {
        if (this.state.query === "") {
            this.setState({ error: false, books: [] });
            return;
        }
        BooksAPI.search(this.state.query).then(resp => {
            if (resp === undefined || (resp.error && resp.error !== "empty query")) {
                return this.setState({ newList: [] });
            } else {
                resp.forEach(books => {
                    let filter = this.props.selectedBooks.filter(
                        filterBooks => books.id === filterBooks.id
                    );
                    if (filter[0]) {
                        books.shelf = filter[0].shelf;
                    }
                });
                return this.setState({ newList: resp });
            }
        });
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                        Close
          </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query.value}
                            onChange={event => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.newList &&
                            this.state.newList.map(book => (
                                <li key={book.id}>
                                    <Book book={book} updateShelf={this.props.updateShelf} />
                                </li>
                            ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Search;