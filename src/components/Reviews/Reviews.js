import React from 'react';
import Comment from '../Comment/Comment';
import useComment from '../Hooks/useComment';

const Reviews = () => {
    const [comments, setComments] = useComment();
    return (
        <div className='m-4'>
            <div className="container">
                <h1 className='text-center my-5'>Our Customer Says</h1>
                <div class="row row-cols-1 row-cols-lg-3 g-4">
                    {
                        comments.map(comment => <Comment
                            key={comment.id}
                            comment={comment}
                        ></Comment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;