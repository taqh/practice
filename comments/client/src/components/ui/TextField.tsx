import ChatContext from '../../context/ChatContext';
import { useContext, useState } from 'react';
import Button from './Button';
import { createAvatar } from '@dicebear/core';
import { adventurerNeutral } from '@dicebear/collection';


const TextField = () => {
  const state = useContext(ChatContext);
  const [value, setValue] = useState('');
  
  const avatar = createAvatar(adventurerNeutral, {
    size: 45,
  }).toDataUriSync();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    state.addComment(value);
    setValue('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='textfield grid gap-3 max-md:gap-x-0 bg-white dark:bg-Gray px-5 py-7 rounded-lg shadow-sm transition'
    >
      <label htmlFor='comment' className='sr-only'>
        Add a comment
      </label>
      <textarea
        id='comment'
        placeholder='Add a comment...'
        className='input resize-none w-full border dark:outline-none dark:border-transparent focus:outline-ModerateBlue dark:focus:outline-SoftBlue dark:bg-TextArea dark:text-PaleBlue caret-ModerateBlue rounded-md p-2 '
        rows={3}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <img src={avatar} alt='Avatar' className='rounded-full'/>
      <Button className='submit text-sm h-fit px-7 py-3 justify-self-end bg-ModerateBlue dark:bg-SoftBlue dark:hover:bg-Blueish hover:bg-LightBlue text-white font-medium uppercase'>
        send
      </Button>
    </form>
  );
};

export default TextField;
