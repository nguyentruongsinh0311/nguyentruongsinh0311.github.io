import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
class App extends Component {


    constructor(props){
        super(props);
        this.state = {
            tasks: [],
        }
    }

    componentWillMount(){
        if(localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'))
        };
        this.setState({
            tasks : tasks
        })
        
    }

    GenerateData =() =>{
        var tasks = [
            {
                id : this.generateID(),
                name : 'abc1231',
                status : true,
            },
            {
                id : this.generateID(),
                name : 'abc2',
                status : true,  
            },
            {
                id : this.generateID(),
                name : 'abc3',
                status : true,
            },
            {
                id : this.generateID(),
                name : 'abc4',
                status : true,
            }
        ];
        
        this.setState({
            tasks : tasks
        });
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }



        // Tao ramdom ID
    s4(){
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
    }
    generateID(){
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4();
    }
 
  render() {
    var {tasks} = this.state;
    return (
      <div className="container">
        <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div className="row">
            <div className="col-xs-4 col-sm-4 col-md42 col-lg-4">
                <TaskForm /> 
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <button 
                type="button"
                className="btn btn-primary"
                >
                    <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                </button>
                <button 
                type="button"
                className="btn btn-danger"
                onClick = {this.GenerateData}
                >
                    <span className="fa fa-plus mr-5"></span>generate data
                </button>
                {/* search - sort*/}
                <TaskControl  />
                <div className="row mt-15">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <TaskList tasks = {tasks}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
