import React, { Component, Fragment } from 'react';


// function App(props) {
//     return<h1>{ props.name}</h1>
// }

class App extends Component{
    constructor(props) {
        super(props);

        this.state={
            text: 'foo',
            hasLoaded: false
        };
    }

    handleChange(event){
        // onsole.log(event.target.value);
        this.setState({
            newText: event.target.value
        });
    }

    toggleHasLoaded = (event) => {  
        console.log("Fire");
        this.setState({
            hasLoaded: !this.state.hasLoaded
        });

    }

    render(){
        if (this.state.hasLoaded){
            return ( 
            <Fragment>
                <input 
                type="text" 
                placeholder={this.state.text}
                onChange= { (e) => {this.handleChange(e);} }
                />
                <button
                    onClick={this.toggleHasLoaded}
                    >SUBMIT
                    </button>
                <h1>{ this.props.text }</h1>
                <h1>{ this.state.text }</h1>
         </Fragment>)

        } else {
            return(
                <Fragment>
                    <h1>WELCOME TO CHIRPER</h1>
                    <div>Logo made with <a href="https://
www.designevo.com/" title="Free Online Logo Maker">DesignEvo</a></div>
                    <button
                        onClick={ this.toggleHasLoaded} 
                        >CHIRP IN
                        </button>
                </Fragment>
            )
        }
    }
}

export default App;