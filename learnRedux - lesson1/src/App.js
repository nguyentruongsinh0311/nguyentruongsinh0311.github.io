import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import Demo from './trainning/Demo'
class App extends Component {

    constructor(props){
        super(props);
        this.state={
            //add - edit
            tasks : [] ,
            // hien thi
            isDisplayForm :false,
            // cap nhat
            taskEditing : null,
            // loc du lieu
            filter:{
                name : '',
                status : -1
            },
            //loc du lieu tren table
            keyword : '', 
            // sap xep du lieu
            sortBy:"name",
            sortValue:1 
        }
        this.onToggleForm = this.onToggleForm.bind(this)
        
    }

    componentWillMount(){
        if(localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks : tasks,
            })
        }
    }



        // Generate DATA

    // GenerateData = () =>{
    //     // console.log("generate");
    //     var tasks =[
    //         {
    //             id : this.generateID(),
    //             name: "Hoc lap trinh",
    //             status: true
    //         },
    //         {
    //             id : this.generateID(),
    //             name: "Di boi",
    //             status: false 
    //         },
    //         {
    //             id :  this.generateID(),
    //             name: "Di ngu",
    //             status: true
    //         },
    //     ];
    //     this.setState({
    //         tasks : tasks,
    //     })
    //     localStorage.setItem('tasks',JSON.stringify(tasks));
    // }
        // Tao ramdom ID
    s4(){
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
    }
    generateID(){
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4();
    }


    onToggleForm =() =>{ //them task
        if (this.state.isDisplayForm && this.state.taskEditing !== null){
            this.setState({
                isDisplayForm :true,
                taskEditing : null,
            })
        }else{
        this.setState({
            isDisplayForm : !this.state.isDisplayForm,
            taskEditing :null,
        })
    }
    }

    onCloseForm =() =>{
       this.setState({
           isDisplayForm : false
       })
    }

    onShowForm = () =>{
        this.setState({
            isDisplayForm:true
        })
    }

    onSubmit = (data) => {
        var {tasks} = this.state; //var tasks = this.state.tasks 
        // kiem tra neu id chua co thi tao id , neeu id co r thi sua
        if(data.id === "" ){
       data.id = this.generateID();
             tasks.push(data);
        }
        else{
            var index = this.findIndex(data.id);
            tasks[index] = data;        
        }
       this.setState({
           tasks:tasks,
           taskEditing : null
       })
       localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onUpdateStatus = (id) =>{
        var {tasks} = this.state;
        var index = this.findIndex(id);
        if(index !== -1){
            tasks[index].status = !tasks[index].status
            this.setState({
                tasks : tasks
            })
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }

    }
    onDelete =(id) =>{
        console.log(id)
    }

    findIndex = (id) =>{
        var {tasks} = this.state;
        var result = -1; 
        tasks.forEach((task,index)=>{
            if(task.id === id){    
                result = index;
            }
        });
        return result;
    }

    onDelete =(id) =>{
        var {tasks} = this.state;
        var index = this.findIndex(id);
        if(index !== -1){
            tasks.splice(index,1);
            this.setState({
                tasks : tasks
            })
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }
        this.onCloseForm();
    }
    onUpdate =(id)=>{
        var {tasks} = this.state;
        var index = this.findIndex(id);
        var taskEditing = tasks[index];
        this.setState({
            taskEditing : taskEditing
        })
        this.onShowForm();
    }
    onFilter=(filterName , filterStatus) =>{
        filterStatus=parseInt(filterStatus,10);
        console.log(filterName, '-',filterStatus);
        this.setState({
            filter:{
                name: filterName.toLowerCase(),
                status: filterStatus,
            }
        })


    }
    onSearch=(keyword)=>{
        this.setState({
            keyword:keyword
        })
    }
    onSort=(sortBy,sortValue)=>{
        this.setState({
            sortBy:sortBy,
            sortValue:sortValue
        })
    }

  render() {

    var {tasks, isDisplayForm , taskEditing,filter ,keyword,sortBy,sortValue} = this.state ; //var tasks = this.state.tasks
    if(filter){  //kiem tra bien filter co hay k
        if(filter.name){  //bien filter co gia tri??
            tasks = tasks.filter((task)=>{
                return task.name.toLowerCase().indexOf(filter.name) !== -1;
            })
        }   
            tasks = tasks.filter((task)=>{
                if(filter.status === -1 ){
                    return task
                }else{
                    return task.status === (filter.status === 1 ? true : false  )
                }
            })

    }
    if(sortBy === "name"){
        tasks.sort((a,b)=>{
            if(a.name >b.name) return sortValue;
            else if(a.name < b.name) return -sortValue;
            else return 0;
        })
    }else{
        tasks.sort((a,b)=>{
            if(a.status >b.status) return -sortValue;
            else if(a.status < b.status) return sortValue;
            else return 0;
        })
    }
    if(keyword){
        tasks = tasks.filter((task)=>{
            return task.name.toLowerCase().indexOf(keyword) !== -1;
        })
    }
    var ElmTaskForm = isDisplayForm ? 
    <TaskForm 
    onCloseForm = {this.onCloseForm}
    onSubmit={this.onSubmit}
    task = {taskEditing}
 

    /> : '';
    return (
      <div className="container">
        <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div className="row">
            <div className ={ isDisplayForm === true ? "col-xs-4 col-sm-4 col-md42 col-lg-4" : ""} >
                {ElmTaskForm }
            </div>
            <div className={ isDisplayForm === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"  }>
                <button 
                type="button"
                className="btn btn-primary"
                onClick={this.onToggleForm}
                >
                    <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                </button>
                {/* <button 
                type="button" 
                className="btn btn-danger ml-5" 
                onClick = {this.GenerateData}>
                    Data
                </button> */}
                {/* search - sort*/}
                <TaskControl 
                onSearch = {this.onSearch}
                onSort = {this.onSort}
                sortBy={sortBy}
                sortValue={sortValue}
                />
                <div className="row mt-15">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <TaskList 
                        tasks = {tasks}
                        onUpdateStatus = {this.onUpdateStatus}
                        onDelete = {this.onDelete}
                        onUpdate={this.onUpdate}
                        onFilter = {this.onFilter}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
