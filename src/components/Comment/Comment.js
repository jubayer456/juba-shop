import React from 'react';
import './Comment.css'
const Comment = ({ comment }) => {
    const { img, name, ratings, review } = comment;
    return (
        <div class="col">
            <div class="card text-center h-100">
                <img src={img} className="card-img-top card-img" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p>Ratings{ratings}</p>
                    <p class="card-text">{review}</p>
                </div>
            </div>
        </div>
    );
};

export default Comment;