import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/cover pic.png'
import Comment from '../Comment/Comment';
import useComment from '../Hooks/useComment';
import './Home.css'
const Home = () => {
    const [comments, setComments] = useComment();
    return (
        <div className='m-4'>
            <div className="container">
                <div className="row d-flex align-items-center g-4">
                    <div className="col-12 col-lg-8">
                        <h5 className='discount' >Sale up to 70% off</h5>
                        <h1 className='fs-1 mt-4'>New Collection For Fall</h1>
                        <p className='fs-5'>Discover all the new arrivals of ready-to-wear collection.</p>
                        <button className='border-0 py-2 px-4 rounded mt-4 bg-warning'>shop now</button>
                    </div>
                    <div className="col-12 col-lg-4">
                        <img src={logo} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
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
            <Link to='/reviews'>
                <button className='ku border-0 rounded  py-2 px-4 bg-success my-4'>Show all Comments</button>
            </Link>
        </div>
    );
};

export default Home;