import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
	getStyle = () => {
		return {
			backgroundColor: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed ? 
			'line-through' : 'none'
		}
	}

  	render() {
  		const { id, title } = this.props.todo;
	    return (
	    	<div style={this.getStyle()}>
	    		<p>
	    		<input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
	    		{ title }
	    		<button onClick = {this.props.delTodo.bind(this, id)} style = {btnStyle}>x</button>
	    		</p>
	    	</div>
	    )
	}
}

const itemStyle = {
	backgroundColor: '#f4f4f4'
}

const btnStyle = {
	background: '#ff0000',
	colod: '#fff',
	border: 'none',
	padding: '5px 9px',
	borderRadius: '50%', 
	cursor: 'pointer',
	float: 'right'

}

// PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
}

export default TodoItem;
