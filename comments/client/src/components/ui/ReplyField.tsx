import avatar from '../../assets/avatars/image-juliusomo.png';
import ChatContext from '../../context/ChatContext';
import { useContext, useState } from 'react';
import Button from './Button';

const TextField = ({ id, replyingTo, close }:{id: string, replyingTo: string, close: () => void}) => {
  const state = useContext(ChatContext);
  const [reply, setReply] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    state.addReply(reply, id, replyingTo);
    close();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='textfield grid gap-3 max-md:gap-x-0 bg-white dark:bg-Gray p-5 rounded-lg shadow-sm transition animate-down'
    >
      <label htmlFor='comment' className='sr-only'>
        Add a reply
      </label>
      <textarea
        id='comment'
        placeholder='Add a reply...'
        className='input resize-none w-full border dark:outline-none dark:border-transparent focus:outline-ModerateBlue dark:focus:outline-SoftBlue dark:bg-TextArea dark:text-PaleBlue caret-ModerateBlue rounded-md p-2 '
        rows={3}
        value={reply}
        onChange={(e) => setReply(e.target.value)}
      />
      <img src={avatar} alt='profile pic' className='w-11 h-11' />
      <Button className='submit text-sm h-fit px-7 py-3 justify-self-end bg-ModerateBlue dark:hover:bg-Blueish dark:bg-SoftBlue hover:bg-LightBlue text-white font-medium uppercase'>
        reply
      </Button>
    </form>
  );
};

export default TextField;
