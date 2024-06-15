import React from 'react'
import { Appcontext } from '../context/Appcontext';
import {useContext} from 'react';
import Spinner from './Spinner';

// author
// : 
// "Jane Doe"
// category
// : 
// "AI"
// content
// : 
// "As we enter a new year, it's important to take stock of where AI is heading. Here are 10 trends to watch in 2023, including the rise of responsible AI, the use of AI in personalized medicine, and the impact of quantum computing on AI algorithms."
// date
// : 
// "2023-01-02"
// id
// : 
// "BLOG100"
// img
// : 
// "https://source.unsplash.com/random/100x100?person,portrait"
// tags
// : 
// (5) ['AI', 'Machine Learning', 'Deep Learning', 'Neural Networks', 'Natural Language Processing']
// title
// : 
// "10 AI Trends to Watch in 2023"

const Blog = () => {
    const {posts, loading} = useContext(Appcontext);

    return (
        <div className="blog">
        {
            loading ? (<Spinner/>) :

            (<div className="container">
                {posts.map(post => (
                <div className="card" key={post.id}>
                    <div className="title">
                        {post.title}
                    </div>

                    <div className="author">
                        By {post.author} on <span>{post.category}</span>
                    </div>

                    <div className="date">
                        Posted on {post.date}
                    </div>

                    <div className="content">
                        {post.content}
                    </div>

                    <div className="tags">
                        {post.tags.map((tag, index) => {
                            return <span key={index}>#{tag}</span>
                        })}
                    </div>
                </div>
            ))}
            </div>
            )
        }
        </div>
    )
}

export default Blog