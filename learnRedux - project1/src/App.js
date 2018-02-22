import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import {connect} from 'react-redux';
import * as  actions from './actions/Index'

class App extends Component {

    constructor(props){
        super(props);
        this.state={
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

    onToggleForm =() =>{ //them task
        this.props.onToggleForm();
    }

    onCloseForm =() =>{
   this.props.onCloseForm();
    }

    onShowForm = () =>{
        this.setState({
            isDisplayForm:true
        })
    }


    onDelete =(id) =>{
        console.log(id)
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

    var {taskEditing,sortBy,sortValue} = this.state ; //var tasks = this.state.tasks

    var {isDisplayForm} = this.props;


    var ElmTaskForm = isDisplayForm ===true ? 
    <TaskForm 
    onCloseForm = {this.onCloseForm}
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
                        // tasks = {tasks}  su dung store lay du lieu 
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

const mapStateToProps = (state) =>{
    return {
        isDisplayForm  : state.isDisplayForm
    };
};
const mapDispatchToProps = (dispatch,props) =>{
    return {
        onToggleForm : () =>{
            dispatch(actions.toggleForm())
        },
        onCloseForm : () =>{
            dispatch(actions.closeForm())
        }
    };

};

export default connect(mapStateToProps,mapDispatchToProps)(App);
