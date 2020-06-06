
import React from 'react';

const Post = (props) => (


    <tr >
        <th>{props.post.id}</th>
        <td>{props.post.userId}</td>
        <td>{props.post.title}</td>
        <td>{props.post.body}</td>

        <td>
            <button
                className="btn btn-secondary"
                onClick={props.onDelete}
            >
                <i className="material-icons"> delete </i>
            </button>

            <button
                className="btn btn-secondary"
                onClick={props.onEdit}
            >
                <i className="material-icons"> edit </i>
            </button>
        </td>
    </tr>


)

export default Post

