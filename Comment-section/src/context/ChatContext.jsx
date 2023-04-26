import { createContext } from 'react';

const ChatContext = createContext({
	value: '',
	posts: [],
	modalRef: {},
	reply: false,
	isReplying: false,
	cancel: () => {},
	delete: (id) => {},
	showModal: () => {},
	updatePost: () => {},
	addComment: () => {},
	handleChange: () => {},
});

export default ChatContext;
