import { nanoid } from 'nanoid';

export default function commentReducer(state, action) {
	switch (action.type) {
		case 'ADDED': {
			return [
				...state,
				{
					id: `comment_${nanoid(10)}`,
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
		case 'DELETE': {
			return state.filter((Comment) => Comment.id !== action.payload);
		}
		case 'UPDATED': {
			return console.log('updated comment');
		}
		case 'REPLY': {
			return console.log('opened reply');
		}
		default: {
			throw Error('Unknown action: ' + action.type);
		}
	}
}
