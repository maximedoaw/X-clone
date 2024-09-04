import { db } from "@/firebase";
import { collection, getDocs,orderBy,query } from "firebase/firestore";
import Post from "./Post";

async function Feed() {
  const q = query(collection(db,'posts'),orderBy('timestamp','desc'))
  const querySnapshot = await getDocs(q)
  let data = []
  querySnapshot.forEach((doc) =>{
    data.push({ id:doc.id,...doc.data() })
  })

  return (
    <div>
      {data.map((post) =>(
        <Post key={post.id} post={post} id={post.id}/>
      ))}
    </div>
  )
}

export default Feed
