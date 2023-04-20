import avatar from '../../assets/avatars/image-juliusomo.png';
import Button from './Button';

const TextField = ({ onSubmit }) => {
	return (
		<form
			onSubmit={onSubmit}
			className='grid gap-3 textfield bg-white dark:bg-Gray p-5 rounded-lg shadow-sm'
		>
			<label htmlFor='comment' className='sr-only'>Add a comment</label>
			<textarea
				id='comment'
				type='textarea'
				placeholder='Add a comment...'
				className='resize-none input dark:bg-TextArea dark:text-PaleBlue border dark:border-PaleBlue rounded-lg caret-ModerateBlue cursor-pointer hover:border-ModerateBlue focus-within:outline-ModerateBlue focus:border-transparent transition px-4 py-2.5'
				rows={3}
				
			/>
			<img src={avatar} alt='profile pic' className='w-11 h-11' />
			<Button className='submit h-fit px-7 py-3 justify-self-end bg-ModerateBlue hover:bg-LightBlue text-white font-medium uppercase'>
				send
			</Button>
		</form>
	);
};

export default TextField;
