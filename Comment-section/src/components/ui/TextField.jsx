import avatar from '../../assets/avatars/image-juliusomo.png';
import Button from './Button';

const TextField = ({ onSubmit }) => {
	return (
		<form
			onSubmit={onSubmit}
			className='grid gap-3 textfield bg-white p-4 rounded-lg'
		>
			<label htmlFor='comment' className='sr-only'></label>
			<textarea
				id='comment'
				type='textarea'
				placeholder='Add a comment...'
				className='resize-none input border rounded-lg cursor-pointer hover:border-ModerateBlue focus:outline-ModerateBlue  transition px-4 py-2'
				rows={3}
			/>
			<img src={avatar} alt='profile pic' className='w-8 h-8' />
			<Button className='submit h-fit px-5 py-1.5 justify-self-end bg-ModerateBlue text-white font-medium'>
				Send
			</Button>
		</form>
	);
};

export default TextField;
