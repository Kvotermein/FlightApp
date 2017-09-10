const cols = [
    { key: 'from', label: 'From' },
    { key: 'to', label: 'To' },
    { key: 'departureTime', label: 'DepartureTime' },
    { key: 'landingTime', label: 'LandingTime' },
    { key: 'price', label: 'Price $' },
    { key: 'button', label: ''}
];

const data = [
    { id: 1, from: 'Minsk', to: 'Kobrin', departureTime: '2017-01-31', landingTime: '2017-01-31', price: '10'},
    { id: 2, from: 'Kobrin', to: 'Minsk', departureTime: '2017-02-2', landingTime: '2017-02-03', price: '10'},
    { id: 3, from: 'Brest', to: 'Addis Ababa', departureTime: '2017-02-12', landingTime: '2017-02-13', price: '55'},

];

export default function tableStore(state = [data,cols], action) {
	switch(action.type) {
		case 'from':
			return {
				...state,
				from : action.from
			}
		case 'to' :
			return {
				...state,
				to : action.to
			}
		case 'departureTime' :
			return {
				...state,
				departureTime : action.departureTime
			}
		case 'landingTime' :
			return {
				...state,
				landingTime : action.landingTime
			}
		case 'price' :
			return {
				...state,
				price : action.price
			}
		case 'filter' :
			return {
				...state,
				filter : action.filter
			}
		case 'delete' :
			return {
				...state,
			}
		case 'flight' :
			return {
				...state,
			}
		default :
			return state;
	}
}