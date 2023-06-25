import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

function CommentInputBox({
  userData,
  commentsData,
  setCommentsData,
  commentsBoxRef,
}) {
  const [comment, setComment] = useState('');
  const commentInputRef = useRef(null);

  useEffect(() => {
    if (commentInputRef) {
      commentInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (commentInputRef) {
      commentInputRef.current.style.height = '45px';
      commentInputRef.current.style.height =
        commentInputRef.current.scrollHeight + 'px';
    }
  }, [comment]);

  return (
    <div className='comment-input-box'>
      <img
        className='profile-thumb user-thumb'
        src={userData.image.png}
        alt='user profile'
      />
      <textarea
        ref={commentInputRef}
        placeholder='Add a comment...'
        value={comment}
        onChange={e => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const clonedCommentsData = structuredClone(commentsData);
          clonedCommentsData.push(
            constructComment(comment, clonedCommentsData, userData)
          );
          flushSync(() => {
            setCommentsData(clonedCommentsData);
            setComment('');
          });
          commentsBoxRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'center',
          });
        }}
      >
        Send
      </button>
    </div>
  );
}

function constructComment(comment, clonedCommentsData, userData) {
  const id = clonedCommentsData.at(-1).id + 1;
  return {
    id,
    content: comment,
    createdAt: '1 month ago',
    score: 0,
    user: {
      image: {
        png: userData.image.png,
        webp: userData.image.webp,
      },
      username: userData.username,
    },
    replies: [],
  };
}

export default CommentInputBox;
