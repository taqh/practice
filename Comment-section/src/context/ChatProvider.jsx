import { useReducer, useRef, useState, useEffect } from 'react';
import ChatContext from './ChatContext';
import chatReducer from './chatReducer';
import data from '../data/data.json';

function ChatProvider({ children }) {
	const chatData = data.comments;
	const [chatState, dispatch] = useReducer(chatReducer, chatData);
	const [commentToDelete, setCommentToDelete] = useState(null);
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

	const addComment = (comment) => {
		dispatch({ type: 'ADDED', payload: comment });
	};

	const addReply = (reply, id, replyingTo ) => {
		dispatch({ type: 'REPLIED', payload: { reply, id, replyingTo } });
	};

	const updateComment = (text, id) => {
		dispatch({ type: 'UPDATED', payload: {text, id} });
	};

	const showModal = (id) => {
		if (!modalRef.current.open) {
			modalRef.current.showModal();
		}
		setCommentToDelete(id);
	};
	
	const cancelDelete = () => {
		modalRef.current.close();
	};

	const deleteComment = () => {
		dispatch({ type: 'DELETED', payload: commentToDelete });
		modalRef.current.close();
		setCommentToDelete(null);
	};


	const chatContext = {
		posts: chatState,
		addReply: addReply,
		modalRef: modalRef,
		showModal: showModal,
		cancel: cancelDelete,
		delete: deleteComment,
		addComment: addComment,
		updateComment: updateComment,
	};

	return (
		<ChatContext.Provider value={chatContext}>
			{children}
		</ChatContext.Provider>
	);
}

export default ChatProvider;
