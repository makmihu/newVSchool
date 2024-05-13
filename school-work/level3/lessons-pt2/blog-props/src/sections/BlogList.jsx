import { useState } from 'react'
import BlogPost from "./BlogPost.jsx"
import data from "./data.jsx"

function BlogList() {
  const posts = data.map(item => {
    return(  
      <BlogPost 
        key={item.id}
        title={item.title}
        subTitle={item.subTitle}
        author={item.author}
        date={item.date}
      />
    )
  })

  return (
    <div className='blogList'>
        {posts}
        <button>Older Posts →</button>
    </div>
  )
}

export default BlogList