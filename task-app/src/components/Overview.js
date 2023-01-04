// create task object
import { render } from '@testing-library/react';
import React, {Component} from 'react';
import App from '../App'

const Overview = (props) => {
    const{tasks} = props;

    function deleting(id, list){
        for (let i = 0; i < list.length; i++){
            if (list[i].id == id){
                list.splice(i, 1)
            }
        }
    }

    return (
        <ul>
            {tasks.map((task) => {
                return <div>
                    <li key={task.id}>{task.text}</li>
                    <button onClick={function(){
                            deleting(task.id, tasks)
                        }}>
                        Delete</button>
                    </div>
            })}
        </ul>
    );
};

export default Overview