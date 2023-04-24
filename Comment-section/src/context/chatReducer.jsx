export default function commentReducer(state, action) {
	let currId = 5;
	switch (action.type) {
		case 'ADDED': {
			return [
				...state,
				{
					id: currId++,
					content: action.payload,
					createdAt: 'few secs ago',
					score: 1,
					user: {
						image: {
							image: {
								png: '../assets/avatars/image-juliusomo.png',
								webp: '../assets/avatars/image-juliusomo.webp',
							},
							username: 'juliusomo',
						},
					},
					replies: [],
				},
			];
		}
		case 'DELETE': {
			return console.log('deleted comment');
		}
		case 'EDIT': {
			return console.log('started editing');
		}
		case 'REPLY': {
			return console.log('opened reply');
		}
		case 'TYPING': {
			return console.log('Typing...');
		}
		default: {
			throw Error('Unknown action: ' + action.type);
		}
	}
}
