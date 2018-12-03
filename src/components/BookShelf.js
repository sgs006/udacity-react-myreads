import React, { Component } from "react";
import Book from "./Book";

class BookShelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books &&
                            this.props.books.map(book => (
                                <li key={book.id} className="book">
                                    <Book book={book} updateShelf={this.props.updateShelf} />
                                </li>
                            ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookShelf;