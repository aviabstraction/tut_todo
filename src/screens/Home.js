import React from 'react';
// import './App.css';
import TodoForm from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';
// import MainRouter from './routes';

//class Inheritance

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: '',
      todoList: [],
      editButtonStatus: false,
      editId: null,
      titleChanger: '',
    };
  }
  //COnstructor is used to initailize values - state
  //perform api request or dom manipulation in componentdidmount

  handleSubmit = async (e) => {
    //POst request
    e.preventDefault();
    if (!this.state.editButtonStatus) {
      //Add Logic
      // const newObject = { title: this.state.todoInput };
      try {
        const newTodo = await Axios.post(
          'https://jsonplaceholder.typicode.com/todos',
          {
            title: this.state.todoInput,
          }
        );
        const newObject = { title: newTodo.data.title };
        this.setState({
          //   todoList: this.state.todoList.concat(newObject),
          todoList: [...this.state.todoList, newObject],
          todoInput: '',
        });

        // console.log('newTodo', newTodo);
      } catch (err) {
        console.log('add error', err);
      }
      // this.setState({
      //   //   todoList: this.state.todoList.concat(newObject),
      //   todoList: [...this.state.todoList, newObject],
      //   todoInput: '',
      // });
    } else {
      //Update logic
      // const updateTodo = await Axios.put(
      //   'https://jsonplaceholder.typicode.com/todos'
      // );
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

  // componentDidMount() {
  //   try {
  //     const fetchAllTodos = async () => {
  //       const allTodos = await Axios.get(
  //         'https://jsonplaceholder.typicode.com/todos',
  //         {
  //           params: {
  //             _limit: 10,
  //           },
  //         }
  //       );

  //       console.log('allTodos', allTodos);
  //       this.setState({ todoList: allTodos.data });
  //     };
  //     fetchAllTodos();
  //   } catch (err) {
  //     console.log('API error', err);
  //   }
  // }

  componentDidUpdate() {
    document.title = this.state.titleChanger;
    //APi request is allowed
  }
  // state is to be shared across multiple components it has to be come from topmost parent common to both

  render() {
    const { todoInput, todoList, titleChanger } = this.state;
    return (
      <div>
        <div>
          <NavLink to="/about">
            <button>About</button>
          </NavLink>
          <NavLink to="/contact">
            <button>Contact</button>
          </NavLink>
        </div>
        <input
          type="text"
          value={titleChanger}
          name="titleChanger"
          onChange={this.handleChange}
          placeholder="enter document title"
        />
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

export default Home;
