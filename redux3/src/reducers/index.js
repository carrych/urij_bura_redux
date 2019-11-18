import { combineReducers } from 'redux'
import updatePage from './page'
import updateUser from './user'

export const rootReducer = combineReducers({
  page: updatePage,
  user: updateUser,
})
