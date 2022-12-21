import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book }) => {
    const { dispatch } = useContext(BookContext);
    const handleClick = (e) => {
        e.preventDefault();
        dispatch({ type: "REMOVE_BOOK", id: book.id });
    };

    return (
        <li>
            <p className="title">{book.title}</p>
            <p className="author">{book.author}</p>
            <button onClick={handleClick}>Delete Book</button>
        </li>
    );
};

export default BookDetails;
