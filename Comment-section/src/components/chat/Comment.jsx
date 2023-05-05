import { useState, useContext } from 'react';
import Reply from './Reply';
import icons from '../ui/icons';
import Button from '../ui/Button';
import ReplyField from '../ui/ReplyField';
import avatars from '../ui/userAvatars';
import UserActions from '../ui/UserActions';
import ChatContext from '../../context/ChatContext';
function Comment(props) {
	const addCtx = useContext(ChatContext);
	const [score, setScore] = useState(props.score);
	const [isReplying, setIsReplying] = useState(false);
	const [currentUser, setCurrentUser] = useState(props.currentUser);
	const [isEditing, setIsediting] = useState(false);
	const [updatedText, setUpdatedText] = useState(props.content);

	const { minus, plus, edit, reply, del } = icons;
	const { amy, julius, max, ramses } = avatars;

	const replyTo = () => {
		setIsReplying((prevState) => !prevState);
	};

	const update = (e) => {
		e.preventDefault()
		addCtx.updateComment(updatedText, props.id)
		setIsediting(!isEditing)
	};

	return (
		<div className='com gap-5 grid' id={props.username}>
			<div className='comment grid gap-3 md:gap-x-7 bg-white dark:bg-Gray p-6 rounded-lg shadow-sm transition duration-300'>
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
				{!isEditing ? (
					<p className={`text dark:text-PaleBlue ${currentUser ? 'animate-up' : ''}`}>{props.content}</p>
				) : (
					<form
						className='edit_field animate-up flex flex-col gap-3'
						onSubmit={update}
					>
						<textarea
							rows={3}
							autoFocus
							value={updatedText}
							className='resize-none w-full border cursor-pointer dark:bg-TextArea dark:border-transparent dark:focus:outline dark:focus:outline-SoftBlue dark:text-PaleBlue caret-ModerateBlue rounded-md p-2 focus:outline-ModerateBlue'
							onChange={(e) => setUpdatedText(e.target.value)}
						></textarea>
						<Button className='w-auto max-sm:w-full sm:self-end bg-ModerateBlue dark:bg-SoftBlue text-white text-sm uppercase font-medium px-4 py-2.5 rounded-md'>
							Update
						</Button>
					</form>
				)}
				<div className='vote h-fit bg-LightGray dark:bg-Vote flex md:flex-col gap-2 items-center justify-center p-2 w-fit rounded-lg transition duration-300'>
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
						className='reply flex gap-2 items-center justify-self-end text-ModerateBlue hover:opacity-80 font-bold'
						onClick={replyTo}
					>
						<img src={reply} alt='reply' />
						<span>Reply</span>
					</Button>
				) : (
					<div className='del flex justify-self-end gap-2'>
						<Button
							className='reply flex gap-2 items-center justify-self-end text-SoftRed hover:text-PaleRed font-bold'
							onClick={() => addCtx.showModal(props.id)}
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

			{isReplying && <ReplyField id={props.id} replyingTo={props.username} close={replyTo}/>}

			{props.hasReplies && (
				<ul className='border-l-2 dark:border-Gray pl-4 md:pl-10 md:ml-10 grid gap-5 transition duration-300'>
					{props.replies.map((reply) => (
						<Reply
							id={reply.id}
							content={reply.content}
							key={reply.id}
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
