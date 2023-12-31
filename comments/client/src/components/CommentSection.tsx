import { useContext, useEffect, useState } from 'react';
import Modal from './ui/Modal';
import Comment from './chat/Comment';
import TextField from './ui/TextField';
import ThemeSwitch from './theme/ThemeSwitch';
import ChatContext from '../context/ChatContext';

function CommentSection() {
  const { posts, deleting, loading } = useContext(ChatContext);

  const comments = posts.map((comment) => (
    <Comment
      id={comment.id}
      key={comment.id}
      score={comment.score}
      content={comment.content}
      replies={comment.replies}
      src={comment.user.image}
      createdAt={comment.createdAt}
      username={comment.user.username}
      hasReplies={comment.replies?.length > 0}
      currentUser={comment.user.username === 'juliusomo'}
    />
  ));

  return (
    <section className='flex flex-col gap-5 mx-auto text-GrayBlue max-w-screen-md min-h-screen bg-inherit px-4 md:px-5 py-7 md:py-10 transition-all'>
      {deleting && <Modal />}
      <h1 className='sr-only'>Comments</h1>
      <ThemeSwitch />
      {loading ? (
        <div className='grid grid-rows-1 my-auto text-center'>
          <p>Loading comments...</p>
        </div>
      ) : comments.length > 0 ? (
        comments
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