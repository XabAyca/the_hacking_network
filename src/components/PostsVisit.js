import React from 'react';
import { useSelector } from 'react-redux';

const PostsVisit = () => {
  const posts = useSelector((state) => state.posts.posts)

  const date = (post) => {
    return (
      new Date(post).toLocaleDateString("en", {
        month: "short",
        day: "numeric",
        year: "numeric"
      })
    )
  };

  return (
    <div className="posts-visit">
      {
        posts && posts.map((post) => {
          return (
            <div key={post.id}>
              <div className='post-visit'>
                <div className='post-title'>
                  <i className="fab fa-hackerrank"></i>
                  <p>{post.text}</p>
                </div>
                <p className='date'>{date(post.created_at)}</p>
              </div>
              <hr/>
            </div>
          )
        })
      }
    </div>
  );
};

export default PostsVisit;