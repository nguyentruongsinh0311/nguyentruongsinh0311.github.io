import React, { Component } from 'react';


class Result extends Component {

  SetStyle(){
    return{
      color: this.props.color,
      borderColor:this.props.color,
      fontSize : this.props.fontSize
    };
  } 

  render() {
    return(
        <div className="col-md-12">
        <p>Color : {this.props.color} - Fontsize :  { this.props.fontSize}px</p>
        <div id="content" style={this.SetStyle()}>
           Content Setting 
        </div>
     </div>
    );
  }
}

export default Result;
