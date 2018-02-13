import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Product from './component/Product';

class App extends Component {
  //lesson JSX mo rong

/*  
  showInfoProduct(product){
      if(product.status === true){
        return (
        <h3>  
        ID :{product.id} <br />
        Name : {product.name} <br />
        Price: {product.price} <br />
        status: {product.status ? "Active" : "Pending "}
        </h3>
        )
      }
    }
*/
  render() {

  //  Leesssonnn JSX mo rong


//     var a = 5;
//     var Name ="sinh";
//     var b =7 ;
//     var product = {
//       id :1,
//       name : "Iphone 7 plus",
//       price: "15.000.000",
//       status: true,
//     };

//     var users = [
//       {
//         id :1,
//         name: "nguyen truong sinh1",
//         age: 231,
//         address: "long bien1",

//       },      
//       {
//         id :2,
//         name: "nguyen truong sinh2",
//         age: 232,
//         address: "long bien2",

//       },      {
//         id :3,
//         name: "nguyen truong sinh3",
//         age: 233,
//         address: "long bien3",

//       },
//     ];
//     var elements = users.map((user) =>{
//       return (
//         <div key={user.id}>
//         <h2 > Ten: {user.name } </h2>
//         <h2> Tuoi: {user.age } </h2>
//         <h2> dia chi : {user.address} </h2>
//         </div>
//       )
//     })
// */


var products = [
  {
    name :"Apple Iphone 6  Plus 16Gb",
    id : 1,
    price : "16.000.000",
    image : "https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600.jpg",
    status: true,
  },
  {
    name :"Samsung Galaxy S4",
    id : 2,
    price : "160.000.000",
    image :  "https://cdn.fptshop.com.vn/Uploads/Originals/2017/8/29/636396217066191623_1.jpg",
    status: true,
  },
  {
    name :" Apple Iphone X",
    id : 3,
    price : "106.000.000",
    image : "https://cdn.fptshop.com.vn/Uploads/Originals/2017/12/8/636483223586180190_1.jpg",
    status: false,
  },
  {
    name :"Apple Iphone 5S",
    id : 4,
    price : "6.000.000",
    image : "https://cdn.fptshop.com.vn/Uploads/Originals/2015/12/28/635869123783238651_iphone-5s-5.jpg",
    status: false,
  },
  {
    name :"Apple Iphone 5S",
    id : 5,
    price : "6.000.000",
    image : "https://cdn.fptshop.com.vn/Uploads/Originals/2015/12/28/635869123783238651_iphone-5s-5.jpg",
    status: true,
  },
  {
    name :"Apple Iphone 5S",
    id : 6,
    price : "6.000.000",
    image : "https://cdn.fptshop.com.vn/Uploads/Originals/2015/12/28/635869123783238651_iphone-5s-5.jpg",
    status: false,
  },
  {
    name :"Apple Iphone 5S",
    id : 7,
    price : "6.000.000",
    image : "https://cdn.fptshop.com.vn/Uploads/Originals/2015/12/28/635869123783238651_iphone-5s-5.jpg",
    status: true,
  },
  {
    name :"Apple Iphone 5S",
    id : 8,
    price : "6.000.000",
    image : "https://cdn.fptshop.com.vn/Uploads/Originals/2015/12/28/635869123783238651_iphone-5s-5.jpg",
    status: true,
  },
];
    let elements = products.map((prod) => {
      let result = " ";
      if(prod.status){

        result =         <div key = { prod.id }  className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                          <Product 
                          
                        price = { prod.price  }
                        image = { prod.image }
                          >
                    { prod.name }
                  </Product>
                  </div>

    }
    return result;
    });

    return (
        <div>
          <h1>AppComponent</h1>
          <Header />
          <div className="row">
                  {elements} 
          </div>

          
       {/*
            leesson JSX mo rong


        <div className = "container">
              <h2>
                 { b }
                 <br />
                 a + b = { a + b}
              </h2>
              <h1>
                  { Name }
              </h1>
              <div>
                  {this.showInfoProduct(product)}
                  { elements }
              </div>
              
          </div>  */
          
          }
        </div>
    );
  }
}

export default App;
