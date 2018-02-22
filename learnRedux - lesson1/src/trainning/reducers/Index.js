var initialState ={
    status : false,
    sort :{
        by:'name',
        value : -1
    }
}

var myReducer = (state = initialState,action) => {
    // action thay doi status
    if(action.type === "TOGGLE_STATUS"){

        let {by,value} = state.sort;

        // state.status = !state.status;
        let status = !state.status;

        return {
            status : status,
            sort:{
                by : by,
                value : value,
            }
        };
    }
    //action thay doi sort value
    if(action.type === "SORT"){

        let {by,value} = action.sort; //var by = action.sort.by

        let {status} = state; // status = state.status
        
        return{
            status : status,
            sort :{
                by :by,
                value:value,
            }
        };
    }
     return state;   
}

export default myReducer;