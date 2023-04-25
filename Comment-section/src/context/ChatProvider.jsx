import { useReducer, useRef, useState } from 'react';
import ChatContext from './ChatContext';
import chatReducer from './chatReducer';
import data from '../data/data.json';

function ChatProvider({ children }) {
	const [chatState, dispatch] = useReducer(chatReducer, data.comments);
	const [isReplying, setIsReplying] = useState(false);
	const [value, setValue] = useState('Test Value');
	const modalRef = useRef();

	
	
	const handleChange = (e) => {
		const currVal = e.target.value;
		setValue(currVal);
		console.log(currVal);
		dispatch({ type: 'TYPING' });
	};
	
	const showModal = () => {
		modalRef.current.showModal();
	};
	
	const reply = (id) => {
		setIsReplying((prevState) => !prevState);
		console.log(id);
	};

	const postComment = (e) => {
		e.preventDefault();
		dispatch({ type: 'ADDED', payload: value });
	};

	const editPost = (e) => {
		e.preventDefault();
		dispatch({ type: 'UPDATED', payload: '' });
	};

	const deleteComment = (id) => {
		modalRef.current.close();
		dispatch({ type: 'DELETE', payload: id });
	};

	const chatContext = {
		reply: reply,
		value: value,
		posts: chatState,
		editPost: editPost,
		modalRef: modalRef,
		showModal: showModal,
		remove: deleteComment,
		isReplying: isReplying,
		addComment: postComment,
		handleChange: handleChange,
	};

	return (
		<ChatContext.Provider value={chatContext}>
			{children}
		</ChatContext.Provider>
	);
}

export default ChatProvider;
