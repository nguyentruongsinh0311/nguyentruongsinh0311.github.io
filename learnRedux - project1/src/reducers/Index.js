import { combineReducers } from 'redux';
import tasks from './Tasks';
import isDisplayForm from './IsDisplayForm';
const myReducer = combineReducers({
    tasks : tasks,
    isDisplayForm: isDisplayForm,
})

export default myReducer;