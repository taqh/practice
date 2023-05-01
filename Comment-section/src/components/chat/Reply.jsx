import { useContext, useState } from 'react';
import icons from '../ui/icons';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import TextField from '../ui/TextField';
import ChatContext from '../../context/ChatContext';

function Reply({ id, currentUser, content, score, src, replyingTo, username }) {
	const replyCtx = useContext(ChatContext);
	const [count, setCount] = useState(score);
	const [isEditing, setIsediting] = useState(false);
	const [isReplying, setIsReplying] = useState(false);
	const [value, setValue] = useState(content);
	const { minus, plus, reply, del, edit } = icons;

	const replyTo = () => {
		setIsReplying((prevState) => !prevState);
	};
	const update = (e) => {
		setValue(e.target.value);
	};

	return (
		<>
			<div className='comment md:ml-0 grid gap-3 md:gap-x-7 bg-white dark:bg-Gray p-6 rounded-lg shadow-sm transition duration-300'>
				<div className='user grid xsm:flex items-center gap-2 xsm:gap-3'>
					{' '}
					<img src={src} alt='user-image' className='w-8 h-8' />
					{currentUser && (
						<span className='bg-ModerateBlue dark:bg-SoftBlue rounded-sm px-1 text-white text-sm text-center'>
							you
						</span>
					)}
					<p className='text-DarkBlue dark:text-Username font-bold'>
						{username}
					</p>
					<span className='dark:text-PaleBlue'>1 week ago</span>
				</div>
				{!isEditing ? (
					<p
						className={`text dark:text-PaleBlue ${
							currentUser ? 'animate-up' : ''
						}`}
					>
						<a className='font-medium dark:text-SoftBlue text-ModerateBlue'>
							{`@${replyingTo}`}
						</a>{' '}
						{content}
					</p>
				) : (
					<form
						className='edit_field animate-up flex flex-col gap-3'
						onSubmit={replyCtx.updatePost}
					>
						<textarea
							rows={3}
							autoFocus
							value={value}
							className='resize-none w-full border dark:outline-none dark:border-transparent focus:outline-ModerateBlue dark:focus:outline-SoftBlue dark:bg-TextArea dark:text-PaleBlue caret-ModerateBlue rounded-md p-2 '
							onChange={update}
						></textarea>
						<Button className='w-auto max-sm:w-full sm:self-end bg-ModerateBlue dark:bg-SoftBlue text-white text-sm uppercase font-medium px-4 py-2.5 rounded-md'>
							Update
						</Button>
					</form>
				)}
				<div className='vote h-fit bg-LightGray dark:bg-Vote flex md:flex-col gap-2 items-center justify-center p-2 w-fit rounded-lg transition duration-300'>
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
						<img src={minus} alt='minus' />
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
							onClick={replyCtx.showModal}
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
		</>
	);
}

export default Reply;
