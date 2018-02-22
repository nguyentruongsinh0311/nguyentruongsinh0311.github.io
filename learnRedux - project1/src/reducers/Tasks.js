import * as types from './../constants/ActionTypes'; // import cac gia tri mac dinh

        // Tao ramdom ID
    var s4=()=>{
            return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
        }
    var randomID=()=>{
            return s4() + s4() + '-' + s4() + '-' +s4() + '-' +s4() + '-' + s4() + '-' + s4() + '-' + s4();
        }
    

    
    var findIndex = (tasks,id) =>{
            var result = -1; 
            tasks.forEach((task,index)=>{
                if(task.id === id){    
                    result = index;
                }
            });
            return result;
        }

var data = JSON.parse(localStorage.getItem('task'));
var initialState = data ? data : []; // kiem tra data trong local storage, neu co thi them vao initial state
var myReducer = (state = initialState,action) =>{
    switch(action.type){
        case types.LIST_ALL: return state;
        
        case types.ADD_TASK:
            var newTask = {
                id : randomID(),
                name: action.task.name,
                status:action.task.status === 'true' ? true : false
                }
            state.push(newTask);
            localStorage.setItem('task',JSON.stringify(state));
            return [...state]; // tranh truong hop tham chieu vung nho.
        
        case types.UPDATE_STATUS:
            console.log(action);
            var id = action.id;
            var index = findIndex(state,id);
            console.log(index)
            // state[index].status = !state[index].status;  khong cap nhat duoc ngoai view
            //CACH 1 : clone task moi = task cu  , status = !status. Xoa task cu => task moi 
                //tao task moi
                // var cloneTask = {...state[index]};
                // // status =!status
                // cloneTask.status = !cloneTask.status;
                // // thay task cu = task moi
                // state[index] = cloneTask;
            // Cach 2
                state[index] = {
                    ...state[index],
                    status : !state[index].status
                };
            localStorage.setItem('task',JSON.stringify(state));
        return[...state];
            
        default : return state;
    }


};

export default myReducer;


