export default function loginStore(state = {}, action) {
	switch(action.type) {
		case 'add':
			return {
				...state,
				login : action.login
			}
		case 'pass' :
			return {
				...state,
				password : action.password
			}
		default :
			return state;
	}
}