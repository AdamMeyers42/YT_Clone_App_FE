import React, { useReducer } from 'react'

const commentReducer = (state, action) => {
    switch (action.type) {
        case 'COMMENTS_LOADED':
            // Update the comments with the new payload
            return { "showComments": true, "comments": state.comments }
        case 'ADD_COMMENT':
            // Copy the current states' comments
            const comments = [...state.comments];
            // Push the new comment from the payload
            comments.push({id:state.comments[state.comments.length - 1].id + 1, text:action.payload});
            // Return the updated state
            return { "showComments": true, "comments": comments }
        case 'REMOVE_COMMENT':
            const commentsWithoutDeleted = state.comments.filter(comment => comment.id != action.payload);
            // Return updated state
            return { "showComments": true, "comments": commentsWithoutDeleted }
        default:
            throw new Error();
    }
}

const Comments = ({ comments }) => {


    const [state, dispatch] = useReducer(commentReducer, { "showComments": false, "comments": comments })

    const handleInputKeyUp = (ev) => {
        // Press enter key
        if(ev.code == "Enter"){
            dispatch({type: "ADD_COMMENT", payload:ev.currentTarget.value})
        }
    };

    if (!state.showComments) {
        return (
            <>
            <h1>Comments</h1>
            <div className="btn" onClick={() => dispatch({ type: "COMMENTS_LOADED" })}>Load comments</div>
            </>
        )
    } else {
        return(<>
            <h1>Comments</h1>
            <div>
                {state.comments.map(commentItem => (
                    <div key={commentItem.id} className="comment">
                        <div className="comment__text">{commentItem.text}</div>
                        <div className="comment__delete-btn" onClick={() => dispatch({ type: "REMOVE_COMMENT", payload: commentItem.id})}>Delete</div>
                    </div>
                ))}
            </div>
            <div className="comment__new">
                <input className="comment__new-input" type="text" placeholder="Your comment" onKeyUp={handleInputKeyUp} />
            </div>
        </>)
    }
}

export default Comments;