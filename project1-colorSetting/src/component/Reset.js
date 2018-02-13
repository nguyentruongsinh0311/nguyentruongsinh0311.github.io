import React, { Component } from 'react';


class Reset extends Component {

    ResetDefault = () =>{
          this.props.onReceiveDefault(true);
    }

  render() {
    return(
    <button type="button" className="btn btn-primary" onClick ={this.ResetDefault}>Reset</button>
    );
  }
}

export default Reset;
