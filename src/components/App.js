import { useState } from "react";
import video from "../data/video.js";

function App() {
  const {title,embedUrl,views,createdAt,downvotes,upvotes,comments} =video

  console.log("Here's your data:", video);
  const [Like,setLike]=useState(upvotes)
  
  const [disLike,setDisLike]=useState(downvotes)
const [isHide,setIsHide]=useState(true)
  return (
    <div className="App"><iframe
        width="719"
        height="425"
        src={embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
<h1>{title}</h1>
<p>{views+ " Views"+ " | Uploaded "+createdAt}</p>
      <div >
        <button onClick={()=>setLike(perv=>perv+1)}> {Like +" "} 👍</button>
      
      <button onClick={()=>setDisLike(perv=>perv-1)}>{disLike +" "} 👎</button></div>
  
  <button onClick={()=>setIsHide(!isHide)} style={{marginTop:"10px"}}>
    {!isHide?"Show Comments":"Hide Comments"}
    
    
    </button>
    <hr/>
    {isHide?
    <div>
      <h1>{comments.length}{" Comments"}</h1>
   { comments.map((item,i)=>
    (<div>
      <h4>{item.user}</h4>
      <p>{item.comment}</p>
    </div>
    ))}</div>:null}
    
    
    </div>
  );
}

export default App;
