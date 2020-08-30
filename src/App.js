import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import { TodoList } from './components/TodoList';

//class Inheritance

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: '',
      todoList: [],
      editButtonStatus: false,
      editId: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.editButtonStatus) {
      const newObject = { todoName: this.state.todoInput };
      this.setState({
        //   todoList: this.state.todoList.concat(newObject),
        todoList: [...this.state.todoList, newObject],
        todoInput: '',
      });
    } else {
      //Update logic
      let copiedTodos = [...this.state.todoList];
      copiedTodos.map((todo, index) => {
        if (index === this.state.editId) {
          todo.todoName = this.state.todoInput;
        }
      });

      this.setState({ todoList: copiedTodos, todoInput: '' });
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  deleteTodo = (idx) => {
    console.log('idx', idx);
    let copiedTodos = [...this.state.todoList];
    copiedTodos = copiedTodos.filter((todo, index) => index !== idx);

    // let filterValues = [];
    // copiedTodos.map((todo, index) => {
    //   if (todo.todoName !== name) {
    //     filterValues.push({ todoName: todo.todoName });
    //   }
    // });
    // console.log('filterValues', filterValues);
    // console.info('copied', copiedTodos);
    this.setState({
      todoList: copiedTodos,
    });
  };

  updateTodo = (idy) => {
    let updateName = this.state.todoList.filter((item, index) => index === idy);
    this.setState({
      todoInput: updateName[0].todoName,
      editId: idy,
      editButtonStatus: true,
    });
  };
  // state is to be shared across multiple components it has to be come from topmost parent common to both

  render() {
    const { todoInput, todoList } = this.state;
    return (
      <div>
        <TodoForm
          todoInput={todoInput}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editButtonStatus={this.state.editButtonStatus}
        />
        <TodoList
          todoList={todoList}
          deleteTodo={this.deleteTodo}
          updateTodo={this.updateTodo}
        />
      </div>
    );
  }
}

export default App;
