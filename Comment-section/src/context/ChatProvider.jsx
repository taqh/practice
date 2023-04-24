import { useReducer, useRef, useState } from 'react';
import ChatContext from './ChatContext';
import data from '../data/data.json';
import chatReducer from './chatReducer';

function ChatProvider({ children }) {
	const [chatState, dispatch] = useReducer(chatReducer, data.comments);

	const modalRef = useRef();
	const reply = (id) => {
		setIsReplying((prevState) => !prevState);
		console.log(id);
	};

	const [isReplying, setIsReplying] = useState(false);
	const [value, setValue] = useState('Test Value');
	
	const handleChange = (e) => {
		const currVal = e.target.value;
		setValue(currVal);
		console.log(currVal);
		dispatch({ type: 'TYPING' });
	};
	const showModal = () => {
		modalRef.current.showModal();
	};

	const postComment = (e) => {
		e.preventDefault();
		dispatch({ type: 'ADDED', payload: value });
	};

	const deleteComment = (id) => {
		modalRef.current.close();
		dispatch({ type: 'DELETE' });
		// comments.comments.filter(Comment => Comment.id !== id)
	};


	const chatContext = {
		isReplying: isReplying,
		reply: reply,
		modalRef: modalRef,
		showModal: showModal,
		remove: deleteComment,
		addComment: postComment,
		posts: chatState,
		value: value,
		handleChange: handleChange,
	};

	return (
		<ChatContext.Provider value={chatContext}>
			{children}
		</ChatContext.Provider>
	);
}

export default ChatProvider;
