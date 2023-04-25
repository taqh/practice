import { createContext } from 'react';

const ChatContext = createContext({
	value: '',
	posts: [],
	modalRef: {},
	reply: false,
	isReplying: false,
	editPost: () => {},
	showModal: () => {},
	addComment: () => {},
	handleChange: () => {},
	deleteComment: () => {},
});

export default ChatContext;
