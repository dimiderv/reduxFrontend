import { useSelector } from "react-redux";

import React from 'react'
import { selectAllPosts } from "./postSlice";
// import { selectMutis } from "../mutis/mutiSlice";
// import { selectAllUsers } from "../users/usersSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
const PostsList = () => {
    const posts = useSelector(selectAllPosts);
    // const mutis = useSelector(selectMutis);
    // const users = useSelector(selectAllUsers)

    const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date));
    const renderedPosts = orderedPosts.map(post=>(
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p> 
            <p className="postCredit">
              <PostAuthor userId = {post.userId}/>  
              <TimeAgo timestamp={post.date}/>
            </p> 
            <ReactionButtons post={post}/>
            {/* {mutis.muti} */}
            {/* {users[0].name} */}
        </article>
       
    ))
  

  return (
    <section>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
  )
}

export default PostsList