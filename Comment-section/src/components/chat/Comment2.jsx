import { useState } from 'react';
import Plus from '../ui/Plus';
import Minus from '../ui/Minus';
import Button from '../ui/Button';
import Reply from '../../assets/icon-reply.svg';
import pfp from '../../assets/avatars/image-maxblagun.png';
import UserReply from './UserReply';
import Replies from './Reply';

function Comment2(props) {
	const [count, setCount] = useState(5);
	const [hasReplies, setHasReplies] = useState(true);
	return (
		<>
			<div className='comment grid gap-3 md:gap-x-7 bg-white dark:bg-Gray p-6 rounded-lg shadow-sm'>
				<div className='user grid xsm:flex items-center xsm:gap-3'>
					{' '}
					<img src={pfp} alt='user-image' className='w-8 h-8' />
					<p className='text-DarkBlue dark:text-Username font-bold'>
						maxblagun
					</p>
					<span className='dark:text-PaleBlue'>2 weeks ago</span>
				</div>
				<p className='text dark:text-PaleBlue'>
					Woah, your project looks awesome! How long have you been coding
					for? I'm still new, but think I want to dive into React as well
					soon. Perhaps you can give me an insight on where I can learn
					React? Thanks!
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

				<Button className='reply flex gap-2 items-center justify-self-end text-ModerateBlue hover:text-LightBlue font-bold'>
					<img src={Reply} alt='reply' />
					<span>Reply</span>
				</Button>
			</div>
			{hasReplies && (
				<ul className='border-l-2 border-l-DarkGray md:pl-10 md:ml-10 grid gap-5'>
					<Replies />
					<UserReply />
				</ul>
			)}
		</>
	);
}

export default Comment2;
