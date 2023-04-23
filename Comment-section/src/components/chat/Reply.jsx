import { useState } from 'react';
import Plus from '../ui/Plus';
import Minus from '../ui/Minus';
import Button from '../ui/Button';
import replyimg from '../../assets/icon-reply.svg';
import pfp from '../../assets/avatars/image-ramsesmiron.png';
import TextField from '../ui/TextField';

function Reply(props) {
	const [count, setCount] = useState(4);
	const [isReplying, setIsReplying] = useState(false);

	const reply = () => {
		setIsReplying((prevState) => !prevState);
	};

	return (
		<>
		<div className='comment ml-6 md:ml-0 grid gap-3 md:gap-x-7 bg-white dark:bg-Gray p-6 rounded-lg shadow-sm'>
			<div className='user grid xsm:flex items-center xsm:gap-3'>
				{' '}
				<img src={pfp} alt='user-image' className='w-8 h-8' />
				<p className='text-DarkBlue dark:text-Username font-bold'>
					ramsesmiron
				</p>
				<span>1 week ago</span>
			</div>
			<p className='text dark:text-PaleBlue'>
				<a className='font-medium text-ModerateBlue'>@maxblagun</a> If
				you're still new, I'd recommend focusing on the fundamentals of
				HTML, CSS, and JS before considering React. It's very tempting to
				jump ahead but lay a solid foundation first.
			</p>
			<div className='vote h-fit bg-LightGray dark:bg-Vote flex md:flex-col md:self-center gap-2 items-center justify-center p-2 w-fit rounded-lg'>
				<Button
					onClick={() => setCount((prevCount) => prevCount + 1)}
					className='w-6 h-6 justify-center flex items-center '
				>
					<Plus className='hover:fill-ModerateBlue' />
				</Button>
				<span className='text-ModerateBlue font-bold'>{count}</span>
				<Button
					onClick={() => setCount((prevCount) => prevCount - 1)}
					className='w-6 h-6 justify-center flex items-center'
				>
					<Minus className='hover:fill-ModerateBlue' />
				</Button>
			</div>

			<Button className='reply flex gap-2 items-center justify-self-end text-ModerateBlue hover:text-LightBlue font-bold' onClick={reply}>
				<img src={replyimg} alt='reply' />
				<span>Reply</span>
			</Button>
		</div>
		{isReplying && <TextField />}
		</>
	);
}

export default Reply;
