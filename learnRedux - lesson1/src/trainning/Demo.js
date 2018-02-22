import {createStore} from 'redux';
import {status, sort} from './actions/Index'
import myReducer from './reducers/Index'

const store = createStore(myReducer);

//log store ban dau

console.log('Default :',store.getState())

// thuc hien cong viec thay doi status

//tao action . Action la 1 obj

// var action = {
//     type : "TOGGLE STATUS"
// };



store.dispatch(status());


console.log('TOGGLE STATUS :', store.getState())


// sap xep ten Z - A

// var SortAction ={
//     type : "SORT",
//     sort :{
//         by : "name",
//         value : 2
//     }
// }

store.dispatch(sort({
    by :"name",
    value: 2
}));

console.log("SORT :",store.getState())