import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deletePostFetch, postsFetch } from '../redux/api/fetch';

const PostsAuth = () => {
  const posts = useSelector((state) => state.posts.posts)
  const profile = useSelector((state) => state.profile.profile)
  const dispatch = useDispatch()
  const history=useHistory()

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
  }
  

  return (
    <div className="posts-auth">
      {
        posts && posts.map((post) => {
          return (
            <div key={post.id}>
              <div className='post-auth'>
                <span className='like'>{post.like}&nbsp;<i class="far fa-thumbs-up"></i></span>
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