import { useState } from 'react'


function BlogPost(props) {
    return(
        <div className='blogPost'>
            <p className='title'>{props.title}</p>
            <p className='subTitle'>{props.subTitle}</p>
            <div className='info'>
                <span>Posted by </span>
                <span className='author'>{props.author}</span>
                <span> on </span>
                <span className='date'>{props.date}</span>
            </div>
        </div>
    )
}

export default BlogPost

