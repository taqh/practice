import { createContext } from 'react';

const ChatContext = createContext({
	posts: [],
	modalRef: {},
	reply: false,
	isReplying: false,
	cancel: () => {},
	delete: (id) => {},
	showModal: () => {},
	addComment: () => {},
	addReply: () => {},
	handleChange: () => {},
	updateComment: () => {},
});

export default ChatContext;
