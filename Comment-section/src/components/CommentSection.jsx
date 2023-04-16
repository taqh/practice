import Comment from './chat/Comment';
import TextField from './ui/TextField';
import UserData from '../data/data.json';

function CommentSection() {
	return (
		<section className='flex flex-col gap-4 mx-auto text-GrayBlue max-w-screen-md min-h-screen bg-grayish-blue px-4 py-6 md:py-10'>
			<h1 className='sr-only'>Comments</h1>
			<Comment />
			<TextField />
		</section>
	);
}

export default CommentSection;
