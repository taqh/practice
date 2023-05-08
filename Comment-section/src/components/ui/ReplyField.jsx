import { useContext, useState } from 'react';
import avatar from '../../assets/avatars/image-juliusomo.png';
import Button from './Button';
import ChatContext from '../../context/ChatContext';

const TextField = ({ id, replyingTo, close }) => {
	const handler = useContext(ChatContext);
	const [reply, setReply] = useState('');
   
	const handleSubmit = (e) => {
		e.preventDefault();
		handler.addReply(reply, id, replyingTo);
		close();
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='textfield grid gap-3 max-md:gap-x-0 bg-white dark:bg-Gray p-5 rounded-lg shadow-sm transition animate-down'
		>
			<label htmlFor='comment' className='sr-only'>
				Add a comment
			</label>
			<textarea
				id='comment'
				type='textarea'
				placeholder='Add a comment...'
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
