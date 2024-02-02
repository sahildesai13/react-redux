import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        console.log('Constructor called Means Component mounted');
    }

    componentDidMount() {
        console.log('Component mounted Successfully');
    }

    componentDidUpdate() {
        console.log('Component  updated ');
    }

    componentWillUnmount() {
        console.log('Component is unmounted Successfully');
    } 

    incrementCount = () => {
        this.setState(prevState => ({
            count: this.state.count + 1
        }));
    }

    render() {
    
        console.log('Render called Means Component Mounted successfully');
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        );
    }
}

export default LifeCycle;
