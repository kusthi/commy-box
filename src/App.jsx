import CommentThread from './components/CommentThread';
import CommentInputBox from './components/CommentInputBox';
import commentsJSON from '../src/data/comments.json';
import { useState, useRef } from 'react';

function App() {
  const [commentsData, setCommentsData] = useState(commentsJSON.comments);
  const commentsBoxRef = useRef(null);
  return (
    <main className='comments-section' ref={commentsBoxRef}>
      <div>
        <CommentThread commentsData={commentsData} />
      </div>
      <CommentInputBox
        userData={{
          image: commentsJSON.currentUser.image,
          username: commentsJSON.currentUser.username,
        }}
        commentsData={commentsData}
        setCommentsData={setCommentsData}
        commentsBoxRef={commentsBoxRef}
      />
    </main>
  );
}

export default App;
