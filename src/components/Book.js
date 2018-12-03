import React, { Component } from "react";
import Changer from "./Changer";

class Book extends Component {
    render() {
        let url =
            this.props.book.imageLinks &&
            "url(" + this.props.book.imageLinks.thumbnail + "";
        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{ width: 128, height: 193, backgroundImage: url }}
                    />
                    <Changer
                        book={this.props.book}
                        updateShelf={this.props.updateShelf}
                    />
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">
                    {this.props.book.authors && this.props.book.authors.join(", ")}
                </div>
            </div>
        );
    }
}

export default Book;