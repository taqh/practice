import { useState } from 'react';
import Plus from '../ui/Plus';
import Minus from '../ui/Minus';
import Button from '../ui/Button';
import Reply from '../../assets/icon-reply.svg';
import amy from '../../assets/avatars/image-amyrobson.png';
import max from '../../assets/avatars/image-maxblagun.png';
import julius from '../../assets/avatars/image-juliusomo.png';
import TextField from '../ui/TextField';
import Replies from './Reply';
import UserReply from './UserReply';

function Comment(props) {
	const [count, setCount] = useState(+props.score);
	const [isReplying, setIsReplying] = useState(false);

	const reply = () => {
		setIsReplying((prevState) => !prevState);
	};
	// const [hasReplies, setHasReplies] = useState(false);

	return (
		<div className='gap-5 grid' id={props.id}>
			<div className='comment grid gap-3 md:gap-x-7 bg-white dark:bg-Gray p-6 rounded-lg shadow-sm'>
				<div className='user grid xsm:flex items-center xsm:gap-3'>
					{' '}
					<img src={amy} alt='user-image' className='w-8 h-8' />
					<p className='text-DarkBlue dark:text-Username font-bold'>
						{props.username}
					</p>
					<span className='dark:text-PaleBlue'>{props.createdAt}</span>
				</div>
				<p className='text dark:text-PaleBlue'>
					{props.content}
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

				<Button
					className='reply flex gap-2 items-center justify-self-end text-ModerateBlue hover:text-LightBlue font-bold'
					onClick={reply}
				>
					<img src={Reply} alt='reply' />
					<span>Reply</span>
				</Button>
			</div>
			{isReplying && <TextField />}

			{props.hasReplies && (
				<ul className='border-l-2 border-l-Gray md:pl-10 md:ml-10 grid gap-5'>
					<Replies 
						
					/>
					<UserReply />
				</ul>
			)}
		</div>
	);
}

export default Comment;
