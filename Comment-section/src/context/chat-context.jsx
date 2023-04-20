import { createContext } from 'react';

const ChatContext = createContext({
	isReplying: false,
	reply: false,
});

export default ChatContext;
