import { useReducer, useRef, useState } from 'react';
import ChatContext from './ChatContext';
import Data from '../data/data.json';
import chatReducer from './chatReducer';

function ChatProvider({ children }) {
	// const [chat, dispatch] = useReducer(chatReducer, initialChat);

	const [isReplying, setIsReplying] = useState(true);

	const [comments, setComments] = useState(Data);

	const reply = () => {
		setIsReplying((prevState) => !prevState);
	};
	const modalRef = useRef();

	const showModal = () => {
		modalRef.current.showModal();
	};

	const deleteComment = (id) => {
		modalRef.current.close();
		console.log();

		// comments.comments.filter(Comment => Comment.id !== id)
		// setComments((prevComments) =>
		// 	prevComments.filter((comment) => {
		// 		if (comment.id === id) {
		// 			return {
		// 				...(prevComments !== comment.id),
		// 			};
		// 		} else {
		// 			return {
		// 				...prevComments,
		// 			};
		// 		}
		// 	})
		// );
	};

	// console.log(comments)

	const chatContext = {
		isReplying: isReplying,
		reply: reply,
		modalRef: modalRef,
		showModal: showModal,
		remove: deleteComment,
		posts: comments,
	};

	return (
		<ChatContext.Provider value={chatContext}>
			{children}
		</ChatContext.Provider>
	);
}

export default ChatProvider;

