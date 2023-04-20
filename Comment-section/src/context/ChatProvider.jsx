import { useState } from 'react';
import ChatContext from './chat-context';

function ChatProvider({ children }) {
	const [isReplying, setIsReplying] = useState(false);

    const reply = () =>  {
		setIsReplying(prevState => !prevState)
	}

	const chatContext = {
		isReplying: isReplying,
		reply: reply
	};

	return (
		<ChatContext.Provider value={chatContext}>
			{children}
		</ChatContext.Provider>
	);
}

export default ChatProvider;
