import React from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList/CommentList';
import User from '../User/User';

function Post({ post: { title, body, user, comments } }) {
  return (
    <div className="postCard">
      <h2>{title}</h2>
      <p>{body}</p>
      <div>
        <User user={user}/>
      </div>
      <h3>Comments</h3>
      <CommentList commentList={comments}/>
      <hr></hr>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.object,
    comments: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Post;
