import { useContext } from 'react';
import DeleteModal from './shared/DeleteModal';
import Comment from './chat/Comment';
import TextField from './ui/TextField';
import ThemeSwitch from './theme/ThemeSwitch';
import ChatContext from '../context/ChatContext';
import AuthModal from './shared/AuthModal';

function CommentSection() {
  const { posts, deleting, loading, authenticated, username } =
    useContext(ChatContext);

  const comments = posts.map((comment) => (
    <Comment
      id={comment._id}
      key={comment._id}
      score={comment.score}
      content={comment.content}
      replies={comment.replies}
      // src={comment.user.avatar}
      createdAt={comment.createdAt}
      username={comment.user.username}
      hasReplies={comment.replies?.length > 0}
      currentUser={comment.user.username === username}
    />
  ));

  return (
    <section className='flex flex-col gap-5 mx-auto text-GrayBlue max-w-screen-md min-h-screen bg-inherit px-4 md:px-5 py-7 md:py-10 transition-all'>
      {!authenticated && <AuthModal />}
      {deleting && <DeleteModal />}
      <h1 className='sr-only'>Comments</h1>
      <ThemeSwitch />
      {loading ? (
        <div className='grid grid-rows-1 my-auto text-center'>
          <p>Loading comments...</p>
        </div>
      ) : comments.length > 0 ? (
        <ul className='flex flex-col gap-5'>{comments}</ul>
      ) : (
        <div className='grid grid-rows-1 my-auto text-center'>
          <p>No comments yet.</p>
        </div>
      )}
      <TextField />
    </section>
  );
}

export default CommentSection;
