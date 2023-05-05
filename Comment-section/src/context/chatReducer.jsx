import { nanoid } from 'nanoid';

export default function commentReducer(state, action) {
	switch (action.type) {
		case 'ADDED': {
			return [
				...state,
				{
					id: nanoid(),
					content: action.payload,
					createdAt: 'few secs ago',
					score: 1,
					user: {
						image: {
							image: {
								png: '../assets/avatars/image-juliusomo.png',
								webp: '../assets/avatars/image-juliusomo.webp',
							},
						},
						username: 'juliusomo',
					},
					replies: [],
				},
			];
		}
		case 'DELETED': {
			return state.filter((Comment) => Comment.id !== action.payload);
		}
		case 'REPLIED_COMMENT': {
			const { id, reply, replyingTo } = action.payload;
			const commentIndex = state.findIndex((comment) => comment.id === id); // find the index of the comment in the array with an id that matches the recived id
			if (commentIndex === -1) {
				return state;
			}
			// create a new comment object
			const updatedComment = {
				...state[commentIndex], // copy all properties of the previous comment at the index that returned true
				replies: [
					// create a new replies array for that comment
					...state[commentIndex].replies, // copy previous replies
					{  // add new reply object
						id: nanoid(),
						content: reply,
						createdAt: 'just now',
						score: 1,
						replyingTo: replyingTo,
						user: {
							image: {
								png: '../../assets/avatars/image-ramsesmiron.png',
								webp: '../../assets/avatars/image-ramsesmiron.webp',
							},
							username: 'juliusomo',
						},
					},
				],
			};
			// update state with new comment object
			return [
				...state.slice(0, commentIndex), // adds all items before the updated comment
				updatedComment, // adds the updated comment
				...state.slice(commentIndex + 1), // returns all items after the updated comment
			];
		}
		case 'REPLIED_REPLY': {
			const { id, text, replyingTo } = action.payload;

			const commentIndex = state.findIndex((comment) =>
				comment.replies.some((reply) => reply.id === id)
			);
			if (commentIndex === -1) {
				return state;
			}
			const replyIndex = state[commentIndex].replies.findIndex(
				(reply) => reply.id === id
			);
		}

		case 'UPDATED': {
			const { id, text } = action.payload;
			return state.map((comment) => {
				if (comment.id === id) {
					return { ...comment, content: text };
				} else {
					return comment;
				}
			});
		}
		default: {
			throw Error('Unknown action: ' + action.type);
		}
	}
}
