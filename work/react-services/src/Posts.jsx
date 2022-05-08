import { useState, useEffect } from 'react';
import Comments from './Comments';
import {fetchCommentsForPostId, fetchPostsList} from './services';

function Posts() {

  const [posts, setPosts] = useState();
  const [error, setError] = useState('');
  const [activePostId, setActivePostId] = useState();
  const [commentsForPostId, setCommentsForPostId] = useState({});

  function saveCommentsForPostId(postId, comments) {
    // Students:Fill in
    setCommentsForPostId({
      ...commentsForPostId,
      [postId]: comments })
  }

  useEffect(
    () => {
      fetchPostsList()
      .then( loadedPosts => {
        setPosts(loadedPosts);
      })
      .catch( error => {
        // STUDENTS: Show an error to the user here
        // Remember not to show the error that is returned
        // But instead show a message BASED on that error
        if(error === `networkError`) setError('There is something wrong with the network');
        else if(error === `serviceError`) setError('There is something wrong with the service');
      });
    },
    [setPosts]
  );


  // Students: You will need to add to/modify this file
  // The data structures shown are not the only way to do it
  // but are a valid suggestion
  return (
    <>
    <div className="status">{ error }</div>
    { !posts && <div className="gg-spinner"/> }
    { posts && (
      <ul className="posts">
        { posts.map( post => {
          return (
            <li key={`post-${post.id}`}>
              <div className="post-li" onClick={ () => {
                if(activePostId === post.id) setActivePostId()
                else setActivePostId(post.id)
              }}>{ post.title }</div>
              { (activePostId === post.id) && <Comments
                  postId={ post.id }
                  comments={ commentsForPostId[post.id] }
                  saveComments={ comments => saveCommentsForPostId(post.id, comments) }
                  setError={setError}
                />
              }
            </li>
          );
        }) }
      </ul>
    ) }
    </>
  );
}

export default Posts;
