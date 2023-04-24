import { useState } from 'react';
import Button from '../ui/Button';
import TextField from '../ui/TextField';
import Replies from './Reply';
import UserReply from './UserReply';
import icons from '../ui/icons';
import avatars from '../ui/userAvatars';
import { useContext } from 'react';
import ChatContext from '../../context/ChatContext';

function Comment(props) {
	const [score, setScore] = useState(props.score);
	const addCtx = useContext(ChatContext)
	const [isReplying, setIsReplying] = useState(false);

	const { minus, plus, reply } = icons;
	const { amy, julius, max, ramses } = avatars;


	const replyTo = (id) => {
		setIsReplying((prevState) => !prevState);
		id = props.id
		console.log(id)
	};

	return (
		<div className='com gap-5 grid' id={props.id}>
			<div className='comment grid gap-3 md:gap-x-7 bg-white dark:bg-Gray p-6 rounded-lg shadow-sm'>
				<div className='user grid xsm:flex items-center xsm:gap-3'>
					{' '}
					<img src={amy} alt='user-image' className='w-8 h-8' />
					<p className='text-DarkBlue dark:text-Username font-bold'>
						{props.username}
					</p>
					<span className='dark:text-PaleBlue'>{props.createdAt}</span>
				</div>
				<p className='text dark:text-PaleBlue'>{props.content}</p>
				<div className='vote h-fit bg-LightGray dark:bg-Vote flex md:flex-col gap-2 items-center justify-center p-2 w-fit rounded-lg'>
					<Button
						onClick={() => setScore((prevCount) => prevCount + 1)}
						className='w-6 h-6 justify-center flex items-center '
					>
						<img src={plus} alt='downvote' />
					</Button>
					<span className='text-ModerateBlue font-bold'>{score}</span>
					<Button
						onClick={() => setScore((prevCount) => prevCount - 1)}
						className='w-6 h-6 justify-center flex items-center'
					>
						<img src={minus} alt='downvote' />
					</Button>
				</div>

				<Button
					className='reply flex gap-2 items-center justify-self-end text-ModerateBlue hover:text-LightBlue font-bold'
					onClick={replyTo}
				>
					<img src={reply} alt='reply' />
					<span>Reply</span>
				</Button>
			</div>
			{isReplying && <TextField />}

			{props.hasReplies && (
				<ul className='border-l-2 pl-4 md:pl-10 md:ml-10 grid gap-5'>
					<Replies />
					<UserReply />
				</ul>
			)}
		</div>
	);
}

export default Comment;
