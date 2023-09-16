import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PostCard from '../components/PostCard';
import CommentCard from '../components/CommentCard';

function Post() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [characterCount, setCharacterCount] = useState(0);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        const fetchPostById = async () => {
            const response = await axios.get(`/posts/byId/${id}`);
            setPostObject(response.data);
        };

        const fetchPostComments = async () => {
            const response = await axios.get(`/comments/${id}`);
            console.log(response.data);
            setComments(response.data);
        };

        fetchPostById();
        fetchPostComments();
    }, [id]);


    const postComments = () => {
        axios
            .post(
                `/comments`,
                {
                    commentBody: newComment,
                    PostId: id,
                },
                {
                    headers: {
                        accessToken: sessionStorage.getItem("accessToken"),
                    }
                }
            )
            .then((response) => {
                if (response.data.error) {
                    alert(response.data.error);
                } else {

                    const commentToAdd = { commentBody: newComment, createdAt: Date().toLocaleString() }
                    setComments([...comments, commentToAdd]);
                    setNewComment("");
                }
            });
    };

    return (
        <div className='flex flex-col p-10 items-center'>
            <PostCard post={postObject} />
            <textarea
                type="text"
                rows={3}
                placeholder='Comment...'
                autoComplete='off'
                className='w-96 mt-5 p-2 border-2 border-slate-600 rounded-lg'
                value={newComment}
                onChange={e => {
                    setCharacterCount(e.target.value.length);
                    setNewComment(e.target.value);
                }}
            />
            <div className='w-96 flex justify-between items-center my-2'>
                <div>Characters: {characterCount}</div>
                <button className='bg-slate-500 p-2 rounded-xl text-white' onClick={postComments}>Add Comment</button>
            </div>
            <div className='flex flex-col rounded-lg shadow-md shadow-slate-400 divide-y divide-solid divide-black overflow-hidden'>
                {comments.toReversed().map((comment, index) => {
                    return (
                        <CommentCard comment={comment} />
                    )
                })}
            </div>

        </div>
    )
}

export default Post;