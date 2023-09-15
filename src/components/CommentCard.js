import React from 'react'

function CommentCard({ comment }) {

    const formatter = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric"
    });

    return (
        <div
            key={comment.id}
            className='w-96 bg-slate-600 flex flex-col p-1 px-2'
        >
            <div className='p-3 text-justify text-white border-b border-gray-800 border-dashed'>{comment.commentBody}</div>
            <div className='flex flex-row justify-between px-3 pt-1 text-white text-sm'>
                <div>123 Like</div>
                <div>{formatter.format(Date.parse(comment.createdAt))}</div>
            </div>
        </div>
    )
}

export default CommentCard;