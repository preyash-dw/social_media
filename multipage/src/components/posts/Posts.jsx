import React from 'react'
import "./posts.scss"
import Post from '../post/Post';
import {useQuery} from "react-query"
import { makeRequest } from '../../aaxios';
const Posts = () => {
 
  const {isLoading,error,data}=useQuery(["posts"],()=>
    makeRequest.get("/posts").then((res)=>{
      return res.data;
    })
  );


  return (
    <div className='posts'>
             {error
        ? error.response.data
        : isLoading
        ? "loading"
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  )
}

export default Posts
