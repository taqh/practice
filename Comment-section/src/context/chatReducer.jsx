import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

export default function commentReducer(state, action) {
	switch (action.type) {
		case 'ADDED': {
			return [
				...state,
				{
					id: nanoid(),
					content: action.payload,
					createdAt: dayjs(),
					score: 1,
					user: {
						image: {
							png: 'src/assets/avatars/image-juliusomo.png',
							webp: 'src/assets/avatars/image-juliusomo.webp',
						},
						username: 'juliusomo',
					},
					replies: [],
				},
			];
		}

		case 'DELETED': {
			const updateComment = state.some(
				(comment) => comment.id === action.payload
			)
				? state.filter((Comment) => Comment.id !== action.payload)
				: state.map((comment) => {
						return {
							...comment,
							replies: comment.replies.filter(
								(reply) => reply.id !== action.payload
							),
						};
				  });
			return updateComment;
		}

		case 'REPLIED': {
			const { id, reply, replyingTo } = action.payload;
			const isReplyingToComment = state.some((comment) => comment.id === id);

			if (isReplyingToComment) {
				const commentIndex = state.findIndex(
					(comment) => comment.id === id
				);
				if (commentIndex === -1) {
					return state;
				}
				// create a new comment object
				const updatedComment = {
					...state[commentIndex], // copy all properties of the previous comment at the index that returned true
					replies: [
						// create a new replies array for that comment
						...state[commentIndex].replies, // copy previous replies
						{
							id: nanoid(),
							content: reply,
							createdAt: dayjs(),
							score: 1,
							replyingTo: replyingTo,
							user: {
								image: {
									png: 'src/assets/avatars/image-juliusomo.png',
									webp: 'src/assets/avatars/image-juliusomo.webp',
								},
								username: 'juliusomo',
							},
						},
					],
				};
				return [
					...state.slice(0, commentIndex),
					updatedComment,
					...state.slice(commentIndex + 1),
				];
			} else {
				const commentIndex = state.findIndex((comment) =>
					comment.replies.some((reply) => reply.id === id)
				);
				const repliedUser = state[commentIndex].replies.find(
					(reply) => reply.id === id
				);
				const name = repliedUser.user.username;
				if (commentIndex === -1) {
					return state;
				}

				const updatedComment = {
					...state[commentIndex],
					replies: [
						...state[commentIndex].replies,
						{
							id: nanoid(),
							content: reply,
							createdAt: 'just now',
							score: 1,
							replyingTo: name,
							user: {
								image: {
									png: 'src/assets/avatars/image-juliusomo.png',
									webp: 'src/assets/avatars/image-juliusomo.webp',
								},
								username: 'juliusomo',
							},
						},
					],
				};
				return [
					...state.slice(0, commentIndex),
					updatedComment,
					...state.slice(commentIndex + 1),
				];
			}
		}

		case 'UPDATED': {
			const { id, text } = action.payload;
			const updatedComment = state.some((comment) => comment.id === id)
				? state.map((comment) => {
						if (comment.id === id) {
							return { ...comment, content: text };
						} else {
							return comment;
						}
				  })
				: state.map((comment) => {
						const updatedReplies = comment.replies.map((reply) => {
							if (reply.id === id) {
								return { ...reply, content: text };
							} else {
								return reply;
							}
						});
						return { ...comment, replies: updatedReplies };
				  });
			return updatedComment;
		}

		default: {
			throw Error('Unknown action: ' + action.type);
		}
	}
}
