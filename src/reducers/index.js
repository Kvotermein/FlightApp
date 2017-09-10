import { combineReducers } from 'redux'
import loginStore from './loginStore.js'
import tableStore from './tableStore.js'

export default combineReducers({
  loginStore,
  tableStore
});