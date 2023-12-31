import avatar from '../../assets/avatars/image-juliusomo.png';
import ChatContext from '../../context/ChatContext';
import { useContext, useState } from 'react';
import Button from './Button';

const TextField = () => {
   const handler = useContext(ChatContext);
   const [value, setValue] = useState('');

   const postComment = async () => {
      try {
         const response = await fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               text: value,
            }),
         });

         if (!response.ok) {
            console.error(
               'Failed to post comment:',
               response.status,
               response.statusText
            );
         } else {
            console.log('Comment posted successfully');
         }
      } catch (error) {
         console.error('Error posting comment:', error);
      }
   }
   
   const handleSubmit = (e) => {
      e.preventDefault();

      postComment();
      // handler.addComment(value);
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
         <img src={avatar} alt='profile pic' className='w-11 h-11' />
         <Button className='submit text-sm h-fit px-7 py-3 justify-self-end bg-ModerateBlue dark:bg-SoftBlue dark:hover:bg-Blueish hover:bg-LightBlue text-white font-medium uppercase'>
            send
         </Button>
      </form>
   );
};

export default TextField;
