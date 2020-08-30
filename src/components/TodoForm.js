import React from 'react';

// const TodoForm = () => {
//   return (
//     <form>
//       <input type="text"></input>
//       {/* <button type="submit">Submit</button> */}
//     </form>
//   );
// };

class TodoForm extends React.Component {
  render() {
    const {
      todoInput,
      handleChange,
      handleSubmit,
      editButtonStatus,
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoInput">Todo Input</label>
        <input
          type="text"
          name="todoInput"
          value={todoInput}
          onChange={handleChange}
          placeholder="type todo"
        ></input>

        <button type="submit">{editButtonStatus ? 'Update' : 'Add'}</button>
      </form>
    );
  }
}
//intial value = ""

//State- Data in the application

// inital state - true

// user performed action or event - state is going to updated

// final state or update state - false

export default TodoForm;
