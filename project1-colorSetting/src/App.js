import React, { Component } from 'react';
import './App.css';
import ColorPicker from './component/ColorPicker';
import SizeSetting from './component/SizeSetting';
import Reset from './component/Reset';
import Result from './component/Result';

class App extends Component {

  constructor(props){
    super(props);
      this.state={
          color: "red",
          fontSize : 20,
          
    }
    this.onSetColor = this.onSetColor.bind(this);
    this.onSetSize = this.onSetSize.bind(this);
    this.SettingDefault = this.SettingDefault.bind(this);
  }
  onSetColor(params){
     this.setState({
       color:params,
     })
  }
  onSetSize(value){
    //8 <= size <= 36
        this.setState({
          // toan tu 3 ngoi
          fontSize:( this.state.fontSize + value >= 8 && this.state.fontSize +value <= 36) ? this.state.fontSize +value : this.state.fontSize
        });
  }

  SettingDefault(value){
      if(value === true){
        this.setState({
          color: "red",
          fontSize : 20,
        })
      }
  }

  render() {
    return(
      <div className="container mt-50">
        <div className="row">
          <ColorPicker color={ this.state.color } 
          /*lay du lieu tu thang cha App.js chuyen sang colorPicker*/ 
          onReceiveColor = {this.onSetColor} 
          /*lay du lieu mau tu thang con la color picker chuyen sang */ 
          />
          <div className="col-md-6">
          <SizeSetting fontSize={this.state.fontSize}
          //gui du lieu tu state cua App sang size setting
          onReceiveSize = {this.onSetSize}
          />
          <Reset 
          onReceiveDefault = {this.SettingDefault}
          />
          </div>  
          <Result color={this.state.color} fontSize={this.state.fontSize}/>
        </div>  
      </div>
    );
  }
}
export default App;
