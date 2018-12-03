import React, { Component } from "react";

class Changer extends Component {
    render() {
        return (
            <div className="book-shelf-changer">
                <select
                    value={this.props.book.shelf || "none"}
                    onChange={e =>
                        this.props.updateShelf(this.props.book, e.target.value)
                    }
                >
                    <option value="move" disabled>
                        Move to...
          </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default Changer;