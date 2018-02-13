import React, { Component } from 'react';

// class ES6
class Header extends Component {
  render() {
    return (
        
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand">Bài 2 : Component</a>
          <ul className="nav navbar-nav">
            <li>
              <a >Trang chủ</a>
            </li>
            <li className="active">
              <a >Danh mục sản phẩm</a>
            </li>
          </ul>
        </nav>
        
    );
  }
}

export default Header;
