import { createContext } from 'react';

const ChatContext = createContext({
	isReplying: false,
	reply: false,
	modalRef: {},
	showModal: () => {},
	deleteComment: () => {},
});

export default ChatContext;
