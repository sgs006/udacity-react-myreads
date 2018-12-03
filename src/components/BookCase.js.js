import React, { Component } from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

class BookCase extends Component {
    render() {
        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <BookShelf
                                key="currently"
                                books={
                                    this.props.books &&
                                    this.props.books.filter(
                                        book => book.shelf === "currentlyReading"
                                    )
                                }
                                updateShelf={this.props.updateShelf}
                                title="Currently Reading"
                            />
                            <BookShelf
                                key="wantToRead"
                                books={
                                    this.props.books &&
                                    this.props.books.filter(book => book.shelf === "wantToRead")
                                }
                                updateShelf={this.props.updateShelf}
                                title="Want to Read"
                            />
                            <BookShelf
                                key="read"
                                books={
                                    this.props.books &&
                                    this.props.books.filter(book => book.shelf === "read")
                                }
                                updateShelf={this.props.updateShelf}
                                title="Read"
                            />
                        </div>
                    </div>
                    <div className="open-search">
                        <Link to="/Search">Add a book</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookCase;