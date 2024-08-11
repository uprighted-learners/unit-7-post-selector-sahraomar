import React, { useState, useEffect} from 'react'

const List = ({ setPostId }) => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        if (posts.length === 0) {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => setPosts(data));
        }

    },[posts]); // use dependency array to avoid infinite loop

// render a list of post titles using click event to set selected postId
  return (
    <div>
        <h2>Select a post to see details</h2>
        <ul>

        {posts.map(post => (
            <li key={post.id} onClick={()=> setPostId(post.id)}>
                {post.title}
            </li>
        ))}

        </ul>
                
        </div>


  );
};

export default List;

