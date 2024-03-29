import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TodoList from '../List/TodoList';
class Home extends Component {
    state = {  } 
    render() { 
        return (
<>
<h1>
    You have a todo list <Link to="/list">click here</Link> to check
</h1>
</>
           
        );
    }
}
 
export default Home;