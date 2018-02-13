import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
        
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="thumbnail">
            <img  alt={this.props.name} src= {this.props.image}/>
            <div className="caption">
              <h3>
                {this.props.children}
              </h3>
              <p>
                {this.props.price}
              </p>
              <p>
                <a  className="btn btn-success">Mua hàng</a>
                <a  className="btn btn-warning">Xóa bỏ</a>
              </p>
            </div>
          </div>
        </div>
        
    );
  }
}

export default Product;
