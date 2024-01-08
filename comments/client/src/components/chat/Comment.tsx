import Reply from './Reply';
import Vote from '../ui/Vote';
import Button from '../ui/Button';
import ReplyField from '../ui/ReplyField';
import { useState, useContext } from 'react';
import ChatContext from '../../context/ChatContext';
import { DeleteIcon, EditIcon, ReplyIcon } from '../ui/icons';
import { CommentProps, Reply as ReplyType } from '../../types';
import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';

const Comment: React.FC<CommentProps> = ({
  content,
  currentUser,
  id,
  username,
  createdAt,
  hasReplies,
  score,
  replies,
}) => {
  const state = useContext(ChatContext);
  const [isEditing, setIsediting] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [updatedText, setUpdatedText] = useState<string>(content);
  // const [isCurrentUser, setIsCurrentUser] = useState<boolean>(currentUser);

  const avatar = createAvatar(adventurer, {
    size: 35,
  }).toDataUriSync();

  const replyTo = () => {
    setIsReplying((prevState) => !prevState);
  };

  const update = (event: React.FormEvent) => {
    event.preventDefault();

    state.updateComment(updatedText, id);
    setIsediting(!isEditing);
  };

  return (
    <li className='com gap-5  grid' id={username}>
      <div className='comment grid gap-y-3 md:gap-x-7 bg-white dark:bg-Gray p-6 rounded-lg shadow-sm transition duration-300'>
        <div className='user grid xsm:flex items-center xsm:gap-3 gap-2'>
          {' '}
          <img src={avatar} alt='Avatar' className='rounded-full' />
          <p className='text-DarkBlue dark:text-Username font-bold'>
            {username}
          </p>
          {currentUser && (
            <span className='bg-ModerateBlue dark:bg-SoftBlue rounded-sm px-1 text-white text-sm text-center'>
              you
            </span>
          )}
          <span className='dark:text-PaleBlue'>{createdAt}</span>
        </div>
        {!isEditing ? (
          <p
            className={`text dark:text-PaleBlue ${
              currentUser ? 'animate-up' : ''
            }`}
          >
            {content}
          </p>
        ) : (
          <form
            className='edit_field animate-up flex flex-col gap-3'
            onSubmit={update}
          >
            <label htmlFor='update' className='sr-only'>
              Edit your comment
            </label>
            <textarea
              id='update'
              rows={3}
              value={updatedText}
              className='resize-none w-full border cursor-pointer dark:bg-TextArea dark:border-transparent dark:focus:outline dark:focus:outline-SoftBlue dark:text-PaleBlue caret-ModerateBlue dark:caret-SoftBlue rounded-md p-2 focus:outline-ModerateBlue'
              onChange={(e) => setUpdatedText(e.target.value)}
            ></textarea>
            <Button className='w-auto max-sm:w-full sm:self-end bg-ModerateBlue dark:hover:bg-Blueish hover:bg-LightBlue dark:bg-SoftBlue text-white text-sm uppercase font-medium px-4 py-2.5 rounded-md'>
              Update
            </Button>
          </form>
        )}

        <Vote score={score} user={currentUser} />

        {!currentUser ? (
          <Button
            className='reply flex gap-2 items-center justify-self-end text-ModerateBlue dark:text-SoftBlue fill-ModerateBlue dark:fill-SoftBlue hover:text-LightBlue dark:hover:text-Blueish hover:fill-LightBlue dark:hover:fill-Blueish font-bold'
            onClick={replyTo}
          >
            <ReplyIcon aria-hidden='true' />
            <span>Reply</span>
          </Button>
        ) : (
          <div className='del flex justify-self-end gap-2'>
            <Button
              className='reply flex gap-2 items-center justify-self-end text-SoftRed fill-SoftRed hover:text-PaleRed dark:hover:text-DarkRed hover:fill-PaleRed dark:hover:fill-DarkRed font-bold'
              onClick={() => state.showModal(id)}
            >
              <DeleteIcon aria-hidden='true' />
              <span>Delete</span>
            </Button>
            <Button
              className='reply flex gap-2 items-center justify-self-end text-ModerateBlue dark:text-SoftBlue fill-ModerateBlue dark:fill-SoftBlue hover:text-LightBlue dark:hover:text-Blueish hover:fill-LightBlue dark:hover:fill-Blueish font-bold'
              onClick={() => setIsediting((prev) => !prev)}
            >
              <EditIcon aria-hidden='true' />
              <span>Edit</span>
            </Button>
          </div>
        )}
      </div>

      {isReplying && (
        <ReplyField id={id} replyingTo={username} close={replyTo} />
      )}

      {hasReplies && (
        <ul className='border-l-2 dark:border-Gray pl-4 md:pl-10 md:ml-10 grid gap-5 transition duration-300'>
          {replies.map((reply: ReplyType) => (
            <Reply
              id={reply.id}
              key={reply.id}
              score={reply.score}
              content={reply.content}
              // src={reply.user.avatar}
              createdAt={reply.createdAt}
              replyingTo={reply.replyingTo}
              username={reply.user.username}
              currentUser={reply.user.username === state.username}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Comment;
