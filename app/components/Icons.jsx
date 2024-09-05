"use client"

import { db } from "@/firebase";
import { collection, deleteDoc, doc, onSnapshot, serverTimestamp, setDoc } from "firebase/firestore";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { HiOutlineChat,HiOutlineHeart,HiOutlineTrash,HiHeart } from "react-icons/hi";

export default function Icons({ id }){
    const { data : session } = useSession()
    const [isLiked,setIsLiked] = useState(false)
    const [likes,setLikes] = useState([])
    const [comments, setComments] = useState([]); // [3
    const likePost = async () => {
      if (session) {
        if (isLiked) {
          await deleteDoc(doc(db, 'posts', id, 'likes', session?.user.uid));
        } else {
          await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
            username: session.user.username,
            timestamp: serverTimestamp(),
          });
        }
      } else {
        signIn();
      }
    };
  
    useEffect(() => {
      onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) => {
        setLikes(snapshot.docs);
      });
    }, [db]);
  
    useEffect(() => {
      setIsLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      );
    }, [likes]);
   
    return (
        <div className="flex justify-start gap-5 p-2 text-gray-500">
            <HiOutlineChat className="h-8 w-8 cursor-pointer rounded-full transition duration-300
            ease-in-out p-2 hover:text-sky-500 hover:bg-sky-100" />
            <div className="flex items-center">
                {isLiked ? 
                (            
                <HiHeart className="h-8 w-8 cursor-pointer rounded-full transition duration-300
                    ease-in-out p-2 text-red-600 hover:text-red-500 hover:bg-red-100" 
                    onClick={likePost}
                    />) :
                (            
                <HiOutlineHeart className="h-8 w-8 cursor-pointer rounded-full transition duration-300
                    ease-in-out p-2 hover:text-red-500 hover:bg-red-100" 
                    onClick={likePost}
                    />)
                }
               {likes.length > 0 && <span className={`text-xs ${isLiked && "text-red-600"}`}>{likes.length}</span>}

            </div>
            <HiOutlineTrash className="h-8 w-8 cursor-pointer rounded-full transition duration-300
            ease-in-out p-2 hover:text-red-500 hover:bg-red-100" />
        </div>
    )
}