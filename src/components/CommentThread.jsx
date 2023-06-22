import CommentBox from './CommentBox';

function CommentThread({ commentsData }) {
  return commentsData.map((comment) => (
    <CommentBox commentData={comment} key={comment.id}>
      {'replies' in comment ? (
        <div className='child-comment-thread'>
          <CommentThread commentsData={comment.replies} />
        </div>
      ) : null}
    </CommentBox>
  ));
}

export default CommentThread;
