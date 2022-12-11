import React from 'react';
import ReactDOM from 'react-dom';
import App from "../App/App";

class Wrapper extends React.Component{

    state = {
        name:'Petya'
    }

    getValue = (e) => {
        e.preventDefault();
        this.setState({
            name:this.inputRef.value + ''
        })
        let input = document.querySelector('.input');
        input.value = '';
    }

    render(){
        return(
            <div>
            <App name = {this.state.name}>

            </App>
                <form action="" onSubmit={this.getValue.bind(this)}>
                    <label>
                        <input className='input' ref ={(inputRef) => this.inputRef = inputRef} type="text"/>
                    </label>
                    <label>
                        <input  type="submit"/>
                    </label>
                </form>
            </div>
        )
    }
}

export default Wrapper;