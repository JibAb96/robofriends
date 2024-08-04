import React, { Component } from "react";

class ErrorBoundary extends Component{
    constructor(){
        super()
        this.state = {
            hasError: false
        }    
    }
    componentDidCatch(){
        this.setState({hasError: true})
    }
    render(){
        if(this.state.hasError){
                return <div>
                    <h1>Oooooops. Error found.</h1>
                </div>
        }else{

            return this.props.children 
        }
    }
}
export default ErrorBoundary