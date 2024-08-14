import React from "react";
// import ReactDOM from "react-dom";






class Reactstate extends React.Component{
    constructor(){
        super();
        this.state={Mywebsite:"Welcome to my page",Mycontent:"This is Deva"};
    }
    changethevalue = () =>{
        this.setState({Mywebsite: "This is my website"});
}

    render(){
        return (
            <div>
                <h1>
                      {this.state.Mywebsite},{this.state.Mycontent}
                </h1>
            <button type="button" onClick={this.changethevalue}>click here</button>
            </div>
        );
    } 
}
export default Reactstate;






