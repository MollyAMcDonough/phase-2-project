import React from "react";

function Quote ({quote, deleteQuote}) {
    const {id, text, author} = quote;
    return (
        <div className="stickynotes">
            {`${text}- ${author}`}
            <button onClick={() => deleteQuote(id)}>Delete</button>
        </div>
    )
}

export default Quote;