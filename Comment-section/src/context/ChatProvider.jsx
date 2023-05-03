import { useReducer, useRef, useState, useEffect } from 'react';
import ChatContext from './ChatContext';
import chatReducer from './chatReducer';
import data from '../data/data.json';

function ChatProvider({ children }) {
	const chatData = data.comments;
	const [chatState, dispatch] = useReducer(chatReducer, chatData);
	const [isReplying, setIsReplying] = useState(false);
	const [commentToDelete, setCommentToDelete] = useState(null)
	const modalRef = useRef();
	
	//  ideally the .close() method is supposed to remove the open attribute on a dialog
	//  but for some reason im getting an error hence why i had to test some solutions

	// here's a method i first tried but i'm not sure is ideal
	// const showModal = () => {
	// 	modalRef.current.removeAttribute('open')
	// 	modalRef.current.showModal();
	// };

	// here's a solution i found on github https://github.com/facebook/react/issues/24399
	// useEffect(() => {
	// 	const dialog = ref.current;
	// 	dialog.showModal();
	// 	return () => dialog.close();
	//  }, []);

	const addComment = (value) => {
		dispatch({ type: 'ADDED', payload: value });
	};

	const showModal = (id) => {
		if (!modalRef.current.open) {
			modalRef.current.showModal();
		}
		setCommentToDelete(id)
	};

	const cancelDelete = () => {
		modalRef.current.close();
	};

	const deleteComment = () => {
		dispatch({ type: 'DELETE', payload: commentToDelete });
		modalRef.current.close();
		setCommentToDelete(null)
	};

	const reply = (id) => {
		setIsReplying((prevState) => !prevState);
		console.log(id);
	};

	const updatePost = (e) => {
		e.preventDefault();
		dispatch({ type: 'UPDATED', payload: '' });
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
