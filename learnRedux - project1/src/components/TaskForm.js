import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/Index'

class TaskForm extends Component {

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === "status"){
            value = target.value === 'true' ? true : false; 
        }
        this.setState({
            [name] : value
        })
    }

    constructor(props){
        super(props);
        this.state = {
            name : "",
            status : false,
            id : '',
        }
    }

    onCloseForm = () =>{
        this.props.onCloseForm();
    }
    
    onSubmit = (event) =>{
        // console.log(this.state);
        event.preventDefault();
        this.props.onAddTask(this.state);
        // cancel & clear form
        this.onClear();
        this.onCloseForm();
    }
    onClear =() =>{
        this.setState({
            name : '',
            status : false
        })
    }

    componentWillMount(){
        if(this.props.task){
            this.setState({
                id : this.props.task.id,
                name : this.props.task.name,
                status:this.props.task.status
            })
        }
    }

    componentWillReceiveProps(nextprops){
        // console.log(nextprops)
        if(nextprops && nextprops.task){
            this.setState({
                id :nextprops.task.id,
                name : nextprops.task.name,
                status:nextprops.task.status
            })
        }
        else if(nextprops && nextprops.task === null){
            this.setState({
                id :"",
                name : "",
                status: false
            })
        }
    }
  render() {
      var {id} = this.state;
    return (
        <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                       {id !== "" ? "Cập nhật công việc" : "thêm công việc"}
                            <span 
                            className="fa fa-times-circle text-right"
                            onClick = {this.onCloseForm}
                            >   
                            </span>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name = "name"
                                value = {this.state.name}
                                onChange = {this.onChange}
                                />
                            </div>
                            <label>Trạng Thái :</label>
                            <select
                                className="form-control" 
                                required="required"
                                name = "status"
                                value = {this.state.status}
                                onChange = {this.onChange}
                                >
                                    <option value= {true}>Kích Hoạt</option>
                                    <option value={false}>Ẩn</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button 
                                type="submit" 
                                className="btn btn-warning"
                                
                                >
                                <span className="fa fa-plus mr-5">
                                    Add
                                </span>
                                </button>&nbsp;
                                <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick= {this.onClear}
                                >
                                    <span className="fa fa-close mr-5">Cancel
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
         </div>
    );
  }
}
const mapStateToProps=(state)=>{
    return{

    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return{
        onAddTask : (task) =>{
            dispatch(actions.addTask(task));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
