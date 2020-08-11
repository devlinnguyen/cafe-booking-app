import React, { Component } from 'react';
import TaskItem from './TaskItem' 

export default class TaskList extends Component {
    render() {
        return (
            <React.Fragment>
                <TaskItem />
                <TaskItem />
                <TaskItem />   
            </React.Fragment>
        );
    }
}
