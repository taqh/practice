import { useRef, useState } from 'react';
import ChatContext from './chat-context';

function ChatProvider({ children }) {
	const [isReplying, setIsReplying] = useState(false);

	const reply = () => {
		setIsReplying((prevState) => !prevState);
	};
	const modalRef = useRef();

	const showModal = () => {
		console.log('Are you sure ?')
		modalRef.current.showModal()
		// console.log(modalRef.current.open)
	}
	const deleteComment = () => {
		modalRef.current.close()
		console.log('Deleted')
	}

	const chatContext = {
		isReplying: isReplying,
		reply: reply,
		modalRef: modalRef,
		showModal: showModal,
		remove: deleteComment,
	};

	return (
		<ChatContext.Provider value={chatContext}>
			{children}
		</ChatContext.Provider>
	);
}

export default ChatProvider;
