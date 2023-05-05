import { useContext, useState } from 'react';
import Button from './Button';
import icons from './icons';
import ChatContext from '../../context/ChatContext';
export default function UserActions({currentUser, isReplying, setIsReplying, setIsediting,}) {
	const { minus, plus, edit, reply, del } = icons;

	const addCtx = useContext(ChatContext);
    const replyTo = (id) => {
		setIsReplying((prevState) => !prevState);
	};

	return (
		<>
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
		</>
	);
}
