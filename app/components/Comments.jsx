"use client"

import { db } from "@/firebase"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import Comment from "./Comment"

function Comments({ id }) {
  
  const [comments,setComments] = useState([])
  useEffect(() =>{
    onSnapshot(
        query(
            collection(db,'posts',id,'comments'),
            orderBy('timestamp','desc')
        ), 
        (snapshot) => {
        setComments(snapshot.docs)
        })
  },[db,id])

  return (
    <div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment.data()}
          commentId={comment.id}  
          originalPostId={id}
        />
      ))}
    </div>
  )
}

export default Comments
