import React from 'react';
import _ from 'lodash';
import './todo.css'
import TodoCount from './todo-count';
import TodoListItem from './todo-list-item';
import {observer} from 'mobx-react'; 

@observer //forces to 
 class TodoList extends React.Component {
    
    renderTodoItems() {
        const props = _.omit(this.props, 'todos');
        return _.map(this.props.todos, (todo, index) => <TodoListItem key={index} todos={todo} {...todo} {...props} />);
    }

    render() {
        return (
            <div className="list form-horizontal">
                
                <TodoCount className ='wrap' todos={ this.props.todos }/>
                { this.renderTodoItems() }
            </div>
        )
    }
}

export default TodoList