import Vote from '../ui/Vote';
import Button from '../ui/Button';
import ReplyField from '../ui/ReplyField';
import { useContext, useState } from 'react';
import ChatContext from '../../context/ChatContext';
import { DeleteIcon, EditIcon, ReplyIcon } from '../ui/icons';
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';
import { ReplyProps } from '../../types';

const avatar = createAvatar(lorelei, {
  size: 35,
}).toDataUriSync();

const Reply: React.FC<ReplyProps> = ({
  id,
  currentUser,
  content,
  score,
  replyingTo,
  username,
  createdAt,
}) => {
  const state = useContext(ChatContext);
  const [isEditing, setIsediting] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [updatedText, setUpdatedText] = useState(content);

  const replyTo = () => {
    setIsReplying((prevState) => !prevState);
  };

  const update = (event: React.FormEvent) => {
    event.preventDefault();

    setIsediting(!isEditing);
    state.updateComment(updatedText, id);
  };

  return (
    <>
      <li
        className='comment md:ml-0 grid gap-y-3 md:gap-x-7 bg-white dark:bg-Gray p-6 rounded-lg shadow-sm transition duration-300'
        id={username}
      >
        <div className='user grid xsm:flex items-center gap-2 xsm:gap-3'>
          <img src={avatar} alt='Avatar' className='rounded-full' />
          {currentUser && (
            <span className='bg-ModerateBlue dark:bg-SoftBlue rounded-sm px-1 text-white text-sm text-center'>
              you
            </span>
          )}
          <p className='text-DarkBlue dark:text-Username font-bold'>
            {username}
          </p>
          <span className='dark:text-PaleBlue'>{createdAt}</span>
        </div>
        {!isEditing ? (
          <p
            className={`text dark:text-PaleBlue ${
              currentUser ? 'animate-up' : ''
            }`}
          >
            <a
              href={`#${replyingTo}`}
              className='font-medium dark:text-SoftBlue dark:outline-SoftBlue outline-ModerateBlue text-ModerateBlue'
            >
              {`@${replyingTo}`}
            </a>{' '}
            {content}
          </p>
        ) : (
          <form
            className='edit_field animate-up flex flex-col gap-3'
            onSubmit={update}
          >
            <label htmlFor='update' className='sr-only'>
              Update reply
            </label>
            <textarea
              id='update'
              rows={3}
              value={updatedText}
              className='resize-none w-full border dark:outline-none dark:border-transparent focus:outline-ModerateBlue dark:focus:outline-SoftBlue dark:bg-TextArea dark:text-PaleBlue caret-ModerateBlue rounded-md p-2 '
              onChange={(e) => setUpdatedText(e.target.value)}
            ></textarea>
            <Button className='w-auto max-sm:w-full sm:self-end bg-ModerateBlue dark:hover:bg-Blueish dark:bg-SoftBlue hover:bg-LightBlue text-white text-sm uppercase font-medium px-4 py-2.5 rounded-md'>
              Update
            </Button>
          </form>
        )}

        <Vote score={score} user={currentUser} />

        {!currentUser ? (
          <Button
            className='reply flex gap-2 items-center justify-self-end text-ModerateBlue dark:text-SoftBlue fill-ModerateBlue dark:fill-SoftBlue hover:text-LightBlue hover:fill-LightBlue dark:hover:text-Blueish dark:hover:fill-Blueish font-bold'
            onClick={replyTo}
          >
            <ReplyIcon aria-hidden='true' />
            <span>Reply</span>
          </Button>
        ) : (
          <div className='del flex justify-self-end gap-2'>
            <Button
              className='reply flex gap-2 items-center justify-self-end text-SoftRed hover:text-PaleRed dark:hover:text-DarkRed fill-SoftRed hover:fill-PaleRed dark:hover:fill-DarkRed font-bold'
              onClick={() => state.showModal(id)}
            >
              <DeleteIcon aria-hidden='true' />
              <span>Delete</span>
            </Button>
            <Button
              className='reply flex gap-2 items-center justify-self-end text-ModerateBlue dark:text-SoftBlue fill-ModerateBlue dark:fill-SoftBlue hover:text-LightBlue hover:fill-LightBlue dark:hover:text-Blueish dark:hover:fill-Blueish font-bold'
              onClick={() => setIsediting((prev) => !prev)}
            >
              <EditIcon aria-hidden='true' />
              <span>Edit</span>
            </Button>
          </div>
        )}
      </li>
      {isReplying && (
        <ReplyField id={id} close={replyTo} replyingTo={username} />
      )}
    </>
  );
};

export default Reply;
