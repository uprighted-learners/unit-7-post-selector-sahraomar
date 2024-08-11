import React, {useState, useEffect } from 'react';
const Display = ({postId}) => {
     // initialize the state to hold selected post details
    const [post, setPost] = useState(null);
    // fetch the selected post when the postId changes
    useEffect(()=>{
        if (postId) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(data => setPost(data));
        }

    },[postId]); //dependency array will trigger fetch when postId is changed

    // render the selected post's title and body or no post selected
  return (
    <div>
        {post ? (
           <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            </div>

        ) : (
            <p>Details will display here</p>
        )}
        
        </div>
  );
};

export default Display;