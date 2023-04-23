import Comment from './chat/Comment';
import Comment2 from './chat/Comment2';
import TextField from './ui/TextField';
import ChatProvider from '../context/ChatProvider';
import { useContext, useState } from 'react';
import ChatContext from '../context/ChatContext';
import { useEffect } from 'react';

function CommentSection() {
	const commentCtx = useContext(ChatContext);
	const posts = commentCtx.posts.comments;

	// const showReplies = useEffect(() => {
	// 	// console.log('EFFECT RAN');
	// 	posts.map((comment) => {
	// 		if (comment.replies.length > 0) {
	// 			setHasReplies(true);
	// 		} else {
	// 			setHasReplies(false);
	// 		}
	// 	});
	// 	// console.log('CLEANUP');
	// 	return;
	// }, []);


	const items = posts.map((comment) => (
		<Comment
			id={comment.id}
			key={comment.id}
			score={comment.score}
			content={comment.content}
			src={comment.user.image.png}
			createdAt={comment.createdAt}
			username={comment.user.username}
			hasReplies={comment.replies.length > 0}
		/>
	));

	// console.log(commentCtx.modalRef);

	return (
		<section className='flex flex-col gap-5 mx-auto text-GrayBlue max-w-screen-md min-h-screen bg-LightGray dark:bg-DarkGray px-5 py-10 md:py-16'>
			<ChatProvider>
				<h1 className='sr-only'>Comments</h1>
				{items}
				<TextField />
			</ChatProvider>
		</section>
	);
}

export default CommentSection;
