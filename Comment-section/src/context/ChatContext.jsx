import { createContext } from 'react';

const ChatContext = createContext({
	posts: [],
	modalRef: {},
	reply: false,
	isReplying: false,
	cancel: () => {},
	delete: () => {},
	addReply: () => {},
	showModal: () => {},
	addComment: () => {},
	handleChange: () => {},
	updateComment: () => {},
});

export default ChatContext;
