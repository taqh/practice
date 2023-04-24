import { useContext, useState } from 'react';
import avatar from '../../assets/avatars/image-juliusomo.png';
import Button from './Button';
import ChatContext from '../../context/ChatContext';

const TextField = ({ onSubmit }) => {
	const handler = useContext(ChatContext)

	return (
		<form
			onSubmit={handler.addComment}
			className='grid gap-3 textfield bg-white dark:bg-Gray p-5 rounded-lg shadow-sm transition'
		>
			<label htmlFor='comment' className='sr-only'>Add a comment</label>
			<textarea
				id='comment'
				type='textarea'
				placeholder='Add a comment...'
				className='resize-none input dark:bg-TextArea dark:text-PaleBlue border rounded-lg caret-ModerateBlue cursor-pointer hover:border-ModerateBlue focus-within:outline-ModerateBlue focus:border-transparent transition px-4 py-2.5'
				rows={3}
				value={handler.value}
				onChange={handler.handleChange}
			/>
			<img src={avatar} alt='profile pic' className='w-11 h-11' />
			<Button className='submit text-sm h-fit px-7 py-3 justify-self-end bg-ModerateBlue dark:bgTag hover:bg-LightBlue text-white font-medium uppercase'>
				send
			</Button>
		</form>
	);
};

export default TextField;
