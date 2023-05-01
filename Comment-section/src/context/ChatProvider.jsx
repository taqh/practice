import { useReducer, useRef, useState, useEffect } from 'react';
import ChatContext from './ChatContext';
import chatReducer from './chatReducer';
import data from '../data/data.json';

function ChatProvider({ children }) {
	const chatData = data.comments;
	const [chatState, dispatch] = useReducer(chatReducer, chatData);
	const [isReplying, setIsReplying] = useState(false);
	const modalRef = useRef();

	// const showModal = () => {
	// 	modalRef.current.removeAttribute('open')
	// 	modalRef.current.showModal();
	// };

	//  ideally the .close() method is supposed to remove the open attribute but
	//  for some reason im getting an error hence why i have to use this method

	// heres a solution i found on github https://github.com/facebook/react/issues/24399
	// useEffect(() => {
	// 	const dialog = ref.current;
	// 	dialog.showModal();
	// 	return () => dialog.close();
	//  }, []);


	const showModal = () => {
		if (!modalRef.current.open) {
			modalRef.current.showModal();
		}
	};
	
	const reply = (id) => {
		setIsReplying((prevState) => !prevState);
		console.log(id);
	};

	const addComment = (value) => {
		dispatch({ type: 'ADDED', payload: value });
	};

	const updatePost = (e) => {
		e.preventDefault();
		dispatch({ type: 'UPDATED', payload: '' });
	};

	const cancelDelete = (id) => {
		modalRef.current.close();
	};

	const deleteComment = (id) => {
		modalRef.current.close();
		dispatch({ type: 'DELETE', payload: id });
	};

	const chatContext = {
		reply: reply,
		posts: chatState,
		modalRef: modalRef,
		showModal: showModal,
		cancel: cancelDelete,
		delete: deleteComment,
		updatePost: updatePost,
		isReplying: isReplying,
		addComment: addComment,
	};

	return (
		<ChatContext.Provider value={chatContext}>
			{children}
		</ChatContext.Provider>
	);
}

export default ChatProvider;
