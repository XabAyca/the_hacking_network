import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deletePostFetch, getUserPostsFetch, postsFetch } from '../redux/api/fetch';

const PostsUser = () => {
  const {userId} =useParams()
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.userPosts.userPosts)
  const profile = useSelector((state) => state.profile.profile) 

  useEffect(() => {
    const getUserPosts = () => {
      dispatch(getUserPostsFetch(userId))
    }
    getUserPosts()
  }, [])

  const date = (post) => {
    return (
      new Date(post).toLocaleDateString("en", {
        month: "short",
        day: "numeric",
        year: "numeric"
      })
    )
  };

  const deletePost = (e,id) => {
    e.preventDefault();
    dispatch(deletePostFetch(id))
    setTimeout(() => {
      dispatch(postsFetch())
    },500)
  }

  return (
    <div className="posts-auth">
      {
        posts && posts.map((post) => {
          return (
            <div key={post.id}>
              <div  className='post-visit'>
                <div className='post-title'>
                  <i className="fab fa-hackerrank"></i>
                  <p className='.post-text'><span className='username'>{post.user.username} : </span>{post.text}</p>
                </div>
                <div>
                  <p className='date'>{date(post.created_at)}</p>
                  {profile.id === post.user.id ? <button onClick={(e)=>deletePost(e,post.id)}className='post-delete'>Delete</button> : null}
                </div>
              </div>
              <hr />
            </div>
          )
        })
      }
    </div>
  );
};

export default PostsUser;