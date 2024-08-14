// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// class demo{
//   methodone(){
//     var a=10;
//     var b=10;
//     var c=a+b;
//     document.getElementById('root').innerHTML=c;


//   }
// }
// var demoone=new demo();
// demoone.methodone();
// var a=()=>{
//   var n=60;
//   if(n==60)
//     document.getElementById('root').innerHTML=n;
// }
// a();
// reportWebVitals();

// class demo{
//   methodone(){
//     var a=10;
//     var b=10;
//     var c=a+b;
//     document.getElementById('root').innerHTML=c;
//   }
// }
// var demoone=new demo();
// demoone.methodone();




//============================================================================================================//
// import React from "react";
// import ReactDOM from "react-dom";
// function Header(){
//   return(
//     <div>
//       <h2>This is Deva</h2>
//       <h3>welcome</h3>
//     </div>
//   )
// }
// function Footer(){
//   return(
//     <div>
//       <h3>hello</h3>
//       <h4>Bye</h4>
//     </div>
//   )
// }
// function NewWebsite(){
//   return(
//     <div>
//       <h1>hello my dear frnds</h1>
//       <h3>Wellcome to city</h3>
//     </div>
//   )
// }
// function Mydemowebsite(){
//   return(
//     <div>
//       <Header/>
//       <Footer/>
//       <NewWebsite/>
//     </div>
//   )
// }
// ReactDOM.render(<Mydemowebsite/>,document.getElementById('root'));
//=====================================================================================================================//
// import React from "react";
// import ReactDOM from "react-dom";

// import './header.js';
// import './header.css';
// import './footer.js';
// import './footer.css';


// const website = {
//   color: "red",
//   backgroundColor: "yellow",
// };

// const Wellcome = () => (
//   <div style={website}>
//     <h2 className="container">This is Deva</h2>
//     <h4>Welcome to my home</h4>
//     <p>Welcome to the page of our website</p>
//   </div>
// );

// ReactDOM.render(<Wellcome />, document.getElementById("root"));

// index.js
import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";
import Reactstate from "./practice/react";
import Reactprops from "./practice/react";




class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        
        <Content />
        <Reactstate />
        <h1>welcome{this.props.mywebsite}</h1>
        <Footer /> 
      
      </div>
    );
  }
}

ReactDOM.render(<App mywebsite=" to our website WWWW.google.com" new ="I love U all" />, document.getElementById("root"));


