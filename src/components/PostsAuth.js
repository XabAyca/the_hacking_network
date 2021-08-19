import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deletePostFetch, likePostFetch, postsFetch } from '../redux/api/fetch';

const PostsAuth = () => {
  const posts = useSelector((state) => state.posts.posts)
  const profile = useSelector((state) => state.profile.profile)
  const dispatch = useDispatch()
  const history = useHistory()
  const [isLiked, setIsLiked] = useState(new Set());

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

  const goToUser = (id, username) => {
    history.push(`/user/${id}`);
  };

  const like = (like, id, e) => {
    e.preventDefault();
    if (isLiked.has(id)) {
      like--;
      e.target.style.color = '#0B7A75';
      let temp = isLiked
      temp.delete(id)
      setIsLiked(temp);
    } else {
      like++
      e.target.style.color = '#3BB273';
      setIsLiked(isLiked.add(id))
    }
    dispatch(likePostFetch(like, id))
    setTimeout(() => {
      dispatch(postsFetch())
    }, 100)
  };
  

  return (
    <div className="posts-auth">
      {
        posts && posts.map((post) => {
          return (
            <div key={post.id}>
              <div className='post-auth'>
                <span  className='like'>{post.like}&nbsp;<i onClick={(e)=>like(post.like,post.id,e)} className="far fa-thumbs-up" ></i></span>
                <div className='post-title'>
                  <i className="fab fa-hackerrank"></i>
                  <p className='.post-text'><span className='username' onClick={() =>goToUser(post.user.id,post.user.username) }>{post.user.username} : </span>{post.text}</p>
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

export default PostsAuth;