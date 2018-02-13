import React, { Component } from 'react';


class ColorPicker extends Component {

  constructor(props){
    super(props);
    this.state={
      Colors :["red", "green","#ccc", "gray" ,"pink","orange","yellow","black"]
    }
  }

  showColor(color){
    return{
      backgroundColor : color,
      borderRadius: "50%",
       
    };
  }

  setActiveColor(color){
      // console.log(color)
      this.props.onReceiveColor(color);

  }

  render() {

    var elmColors = this.state.Colors.map((color,index) =>{
      return (
        <span 
            key= {index} 
            style={ this.showColor(color) }
            className ={this.props.color === color ? "active" : ""}
            onClick ={ () => this.setActiveColor(color) }
            ></span>
      )
    })

    return(
      <div className="col-md-6">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Color Picker</h3>
        </div>
         <div className="panel-body">
           {elmColors}
          <hr/>
        </div>
      </div>
    </div>
    );
  }
}

export default ColorPicker;
