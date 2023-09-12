import React from 'react'
import "./Home.scss"
import Stories from '../stories/Stories'
import Posts from '../posts/Posts'
import Share from '../share/Share'


const Home = () => {
  return (
    <div className='home'>
      <Stories/>
      <Share/>
      <Posts/>
    </div>
  )
}

export default Home
