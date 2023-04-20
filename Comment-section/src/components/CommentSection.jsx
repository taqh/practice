import Comment from './chat/Comment';
import Comment2 from './chat/Comment2';
import TextField from './ui/TextField';
import UserData from '../data/data.json';
import ChatProvider from '../context/ChatProvider';
import Reply from './chat/Reply';
import UserReply from './chat/UserReply';

function CommentSection() {
	return (
		<section className='flex flex-col gap-5 mx-auto text-GrayBlue max-w-screen-md min-h-screen bg-LightGray dark:bg-DarkGray px-5 py-10 md:py-16'>
			<ChatProvider>
				<h1 className='sr-only'>Comments</h1>
				<Comment />
				<Comment2 />
				<Reply />
				<UserReply />
				<TextField />
			</ChatProvider>
		</section>
	);
}

export default CommentSection;
