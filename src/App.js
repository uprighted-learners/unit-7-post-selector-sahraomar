import React, { useState } from "react";
import "./App.css";
import List from "./List";
import Display from "./Display";

function App() {
  // state to hold the id of the selected post
  const [postId, setPostId] = useState(null);

  return (
    <div className="App">
      {/* pass the setPostId function to the List component and it will update selected post */}
      <List setPostId={setPostId} />
      {/* pass selected postId to Display component to fetch and display post details*/}
      <Display postId={postId} />
    </div>
  );
}

export default App;
