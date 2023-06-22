import { ReactComponent as PlusIcon } from '../images/thumbs_up.svg';
import { ReactComponent as MinusIcon } from '../images/thumbs_down.svg';
import { ReactComponent as ReplyIcon } from '../images/icon-reply.svg';
import { useState } from 'react';

function CommentBox({ commentData, children }) {
  const [votes, setVotes] = useState(commentData.score);
  const [vote, setVote] = useState(''); //up, down

  console.log(vote, votes);

  return (
    <div className='comment-box-cont'>
      <div className='comment-box'>
        <div className='vote-count-cont'>
          <PlusIcon
            onClick={() => {
              setVotes((votes) =>
                vote === 'up'
                  ? votes - 1
                  : vote === 'down'
                  ? votes + 2
                  : votes + 1
              );
              setVote((vote) => (vote !== 'up' ? 'up' : ''));
            }}
            className={vote === 'up' ? 'voted' : ''}
          />
          <p>{votes}</p>
          <MinusIcon
            onClick={() => {
              setVotes((votes) =>
                vote === 'down'
                  ? votes + 1
                  : vote === 'up'
                  ? votes - 2
                  : votes - 1
              );
              setVote((vote) => (vote !== 'down' ? 'down' : ''));
            }}
            className={vote === 'down' ? 'voted' : ''}
          />
        </div>
        <div className='comment-content-cont'>
          <div className='comment-meta-cont'>
            <div className='comment-meta'>
              <img className='profile-thumb' src={commentData.user.image.png} />
              <span className='username'>{commentData.user.username}</span>
              <span>{commentData.createdAt}</span>
            </div>
            <div className='comment-meta-btns'>
              <a className='reply-btn'>
                <div>
                  <ReplyIcon />
                  <span>Reply</span>
                </div>
              </a>
            </div>
          </div>
          <p>{commentData.content}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

export default CommentBox;
