import { useContext, useEffect, useState } from 'react';
import Modal from './ui/Modal';
import Comment from './chat/Comment';
import TextField from './ui/TextField';
import ThemeSwitch from './theme/ThemeSwitch';
import ChatContext from '../context/ChatContext';

function CommentSection() {
	const { posts, deleting } = useContext(ChatContext);
	
	let test = {
		"content": "This is a test comment",
		"score": 0,
		"replies": [],
		"user": {
			"username": "juliusomo",
			"image": "https://avatars.githubusercontent.com/u/55942632?v=4"
		}
	}
	

	useEffect(() => {
		fetch (
			'http://localhost:3000/comments'
		)
		.then(res => res.json())
		.then(data => console.log(data))
		.catch(err => console.log(err));
	}, []);
	
	const commentThread = posts.map((comment) => (
		<Comment
			id={comment.id}
			key={comment.id}
			score={comment.score}
			content={comment.content}
			replies={comment.replies}
			src={comment.user.image}
			createdAt={comment.createdAt}
			username={comment.user.username}
			hasReplies={comment.replies.length > 0}
			currentUser={comment.user.username === 'juliusomo'}
		/>
	));

	return (
		<section className='flex flex-col gap-5 mx-auto text-GrayBlue max-w-screen-md min-h-screen bg-inherit px-4 md:px-5 py-7 md:py-10 transition-all'>
			{deleting && <Modal />}
			<h1 className='sr-only'>Comments</h1>
			<ThemeSwitch />
			{commentThread}
			<TextField />
		</section>
	);
}

export default CommentSection;
