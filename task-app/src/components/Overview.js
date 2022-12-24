// create task object
import React, {Component} from 'react';

class Task extends Component{

    constructor(props){
        super(props);

        this.state = {
            title: '',
            dueDate: '',
            description: '',

        };
    }

    //example function
    functionName(){
        this.setState({
            count: this.state.count + 1,
        });
    }

    render(){
        return (
            <div>

            </div>
        )
    }
}