import { useState, useContext } from 'react';
import Reply from './Reply';
import icons from '../ui/icons';
import Button from '../ui/Button';
import TextField from '../ui/TextField';
import avatars from '../ui/userAvatars';
import UserActions from '../ui/UserActions';
import ChatContext from '../../context/ChatContext';

function Comment(props) {
	const addCtx = useContext(ChatContext);
	const [score, setScore] = useState(props.score);
	const [isReplying, setIsReplying] = useState(false);
	const [currentUser, setCurrentUser] = useState(props.currentUser);
	const [isEditing, setIsediting] = useState(false);

	const { minus, plus, edit, reply, del } = icons;
	const { amy, julius, max, ramses } = avatars;

	const replyTo = (id) => {
		setIsReplying((prevState) => !prevState);
		id = props.id;
		console.log(id);

	};

	return (
		<div className='com gap-5 grid' id={props.id}>
			<div className='comment grid gap-3 md:gap-x-7 bg-white dark:bg-Gray p-6 rounded-lg shadow-sm transition'>
				<div className='user grid xsm:flex items-center xsm:gap-3 gap-2'>
					{' '}
					<img src={props.src} alt='user-image' className='w-8 h-8' />
					<p className='text-DarkBlue dark:text-Username font-bold'>
						{props.username}
					</p>
					{currentUser && (
						<span className='bg-ModerateBlue dark:bg-SoftBlue rounded-sm px-1 text-white text-sm text-center'>
							you
						</span>
					)}
					<span className='dark:text-PaleBlue'>{props.createdAt}</span>
				</div>
				<p className='text dark:text-PaleBlue'>{props.content}</p>
				<div className='vote h-fit bg-LightGray dark:bg-Vote flex md:flex-col gap-2 items-center justify-center p-2 w-fit rounded-lg'>
					<Button
						onClick={() => setScore((prevCount) => prevCount + 1)}
						className='w-6 h-6 justify-center flex items-center '
					>
						<img src={plus} alt='upvote' />
					</Button>
					<span className='text-ModerateBlue font-bold'>{score}</span>
					<Button
						onClick={() => setScore((prevCount) => prevCount - 1)}
						className='w-6 h-6 justify-center flex items-center'
					>
						<img src={minus} alt='downvote' />
					</Button>
				</div>
				{!currentUser ? (
					<Button
						className='reply flex gap-2 items-center justify-self-end text-ModerateBlue hover:text-LightBlue font-bold'
						onClick={replyTo}
					>
						<img src={reply} alt='reply' />
						<span>Reply</span>
					</Button>
				) : (
					<div className='del flex justify-self-end gap-2'>
						<Button
							className='reply flex gap-2 items-center justify-self-end text-SoftRed hover:text-PaleRed font-bold'
							onClick={addCtx.showModal}
						>
							<img src={del} alt='delete' />
							<span>Delete</span>
						</Button>
						<Button
							className='reply flex gap-2 items-center justify-self-end text-ModerateBlue hover:text-LightBlue font-bold'
							onClick={() => setIsediting((prev) => !prev)}
						>
							<img src={edit} alt='edit' />
							<span>Edit</span>
						</Button>
					</div>
				)}
			</div>

			{isReplying && <TextField />}

			{props.hasReplies && (
				<ul className='border-l-2 pl-4 md:pl-10 md:ml-10 grid gap-5 transition-all'>
					{props.replies.map((reply) => (
						<Reply
							id={reply.id}
							content={reply.content}
							key={crypto.randomUUID()}
							score={reply.score}
							src={reply.user.image.png}
							createdAt={reply.createdAt}
							username={reply.user.username}
							replyingTo={reply.replyingTo}
							currentUser={reply.user.username === 'juliusomo'}
						/>
					))}
				</ul>
			)}
		</div>
	);
}

export default Comment;
