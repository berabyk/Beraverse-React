import React from 'react'

function PostCard({ post }) {
    return (
        <div
            key={post.id}
            className='border-2 border-slate-600 rounded m-3 w-96 shadow-md shadow-slate-400 cursor-pointer h-fit'
        >
            <div className='text-3xl font-bold text-white bg-slate-600 p-1 text-center'>{post.title}</div>
            <div className='p-3 text-justify'>{post.postText}</div>
            <div className='text-sm bg-slate-600 text-white p-1'>@{post.username}</div>
        </div>
    )
}

export default PostCard;