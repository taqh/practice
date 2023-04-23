import { createContext } from 'react';
import Data from '../data/data.json';

// const [comments, setComments] = useState(Data);

const ChatContext = createContext({
	reply: false,
	modalRef: {},
	isReplying: false,
	showModal: () => {},
	deleteComment: () => {},
	posts: Data,
});

export default ChatContext;
