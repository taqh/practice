import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from './ui/Button';
import ChatContext from '../context/ChatContext';

const AuthModal = () => {
  const { authRef, setUser } = useContext(ChatContext);
  const [input, setInput] = useState<string>('');

  const createUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim().length === 0) {
      return;
    }
    const username = input.toLowerCase();
    setUser(username);
  };

  return (
    <dialog
      className='scale-0 m-auto bg-transparent backdrop:bg-black/85 grid place-content-center p-0'
      ref={authRef}
    >
      <form
        className='max-w-screen-sm bg-white dark:bg-Gray p-5 shadow-md rounded-lg flex flex-col gap-2'
        onSubmit={createUser}
      >
        <div>
          <h2 className='text-DarkBlue text-xl font-bold dark:text-Username'>
            Create Username
          </h2>
          <p className='text-GrayBlue dark:text-PaleBlue my-5'>
            Hello There!. What Would you like to be called?.
          </p>
        </div>
        <div className='mb-6 relative dark:border-transparent  border-ModerateBlue dark:text-PaleBlue rounded-md'>
          <label htmlFor='username' className='placeholder:transparent'>
            Username
          </label>
          <input
            type='text'
            id='username'
            placeholder='Username'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoComplete='off'
            className='placeholder-transparent border dark:border-transparent dark:bg-TextArea w-full py-3 px-4 rounded-md outline-2 dark:outline-none outline-ModerateBlue dark:focus-visible:outline-SoftBlue '
          />
        </div>
        <Button className='bg-ModerateBlue text-white py-2 px-5'>Submit</Button>
      </form>
    </dialog>
  );
};

function AuthForm() {
  return <>{createPortal(<AuthModal />, document.getElementById('portal'))}</>;
}

export default AuthForm;
