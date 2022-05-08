import { useEffect } from 'react';
import { fetchCommentsForPostId } from './services';

function Comments({ postId, comments, saveComments, setError }) {

  // STUDENTS: Because `comments` comes from parent
  // we need a useEffect() here to call saveComments
  // and loading state is implied by comments being falsy
  const isLoading = !comments;

  useEffect(
      () => {
        fetchCommentsForPostId(postId)
        .then( loadedComments => {
          saveComments(loadedComments);
        })
        .catch( error => {
          if(error === `networkError`) setError('There is something wrong with the network');
          else if(error === `serviceError`) setError('There is something wrong with the service');
        });
      },
      [saveComments]
  );

  return (
    <>
    { isLoading && <div className="gg-spinner"></div> }
    { !isLoading && <div className="Comments">{ comments.map( comment => {
        return (
            <li key={`comment-${comment.id}`}>
                <ul>Name: { comment.name }</ul>
                <ul>Email: { comment.email }</ul>
                <ul className="comment-body">{ comment.body }</ul>
            </li>
        )
    }) }</div> }
    </>
  );
};

export default Comments;
