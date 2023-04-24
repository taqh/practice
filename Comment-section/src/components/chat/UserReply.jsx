import { useContext, useState } from 'react';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import icons from '../ui/icons';
import avatars from '../ui/userAvatars';

import ChatContext from '../../context/ChatContext';

function UserReply(props) {
	const [count, setCount] = useState(5);
	const delCtx = useContext(ChatContext);

	const { julius  } = avatars;

	const { del, edit, minus, plus } = icons;


	return (
		<div className='comment md:ml-0 grid gap-3 md:gap-x-7 bg-white dark:bg-Gray p-6 rounded-lg shadow-sm'>
			<Modal />
			<div className='user grid xsm:gap-2 items-center'>
				{' '}
				<img src={julius} alt='user-image' className='w-8 h-8' />
				<p className='text-DarkBlue dark:text-Username font-bold'>
					juliusomo
				</p>
				<span className='bg-ModerateBlue dark:bg-SoftBlue rounded-sm px-1 text-white text-sm text-center'>
					you
				</span>
				<span>2 days ago</span>
			</div>
			<p className='text dark:text-PaleBlue'>
				<a className='font-medium text-ModerateBlue'>@ramsesmiron</a> I
				couldn't agree more with this. Everything moves so fast and it
				always seems like everyone knows the newest library/framework. But
				the fundamentals are what stay constant.
			</p>
			<div className='vote h-fit bg-LightGray dark:bg-Vote flex md:flex-col gap-2 items-center justify-center p-2 w-fit rounded-lg'>
				<Button
					onClick={() => setCount((prevCount) => prevCount + 1)}
					className='w-6 h-6 justify-center flex items-center '
				>
					<img src={plus} alt='upvote' />
				</Button>
				<span className='text-ModerateBlue font-bold'>{count}</span>
				<Button
					onClick={() => setCount((prevCount) => prevCount - 1)}
					className='w-6 h-6 justify-center flex items-center'
				>
					<img src={minus} alt='downvote' />
				</Button>
			</div>

			<div className='del flex justify-self-end gap-2'>
				<Button
					className='reply flex gap-2 items-center justify-self-end text-SoftRed hover:text-PaleRed font-bold'
					onClick={delCtx.showModal}
				>
					<img src={del} alt='delete' />
					<span>Delete</span>
				</Button>
				<Button className='reply flex gap-2 items-center justify-self-end text-ModerateBlue hover:text-LightBlue font-bold'>
					<img src={edit} alt='edit' />
					<span>Edit</span>
				</Button>
			</div>
		</div>
	);
}

export default UserReply;
