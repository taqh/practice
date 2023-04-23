export default function commentReducer(state, action) {
	switch (action.type) {
		case 'ADD': {
			return;
		}
		case 'DELETE': {
			return;
		}
		case 'EDIT': {
			return;
		}
		case 'REPLY': {
			return;
		}
		default: {
			throw Error('Unknown action: ' + action.type);
		}
	}
}
