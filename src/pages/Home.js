import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';

function Home() {

    const [posts, setPosts] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await axios.get('/posts');
        setPosts(response.data);
        console.log(response.data);
    };

    return (
        <div className='flex flex-col items-center'>
            {posts.map((post, index) => {
                return (
                    <div onClick={() => { navigate(`/post/${post.id}`) }}>
                        <PostCard post={post} />
                    </div>
                )
            })}
        </div>
    )
}

export default Home;