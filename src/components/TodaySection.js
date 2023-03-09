import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { addTodos, completeTodos, removeTodos, updateTodos } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  }
}

const TodaySection = (props) => {

  let allListNum = props.todos.length;
  let completedListNum = props.todos.filter((item) => item.completed === true).length;

  //console.log(props.todos.filter((item) => item.completed === true).length);
  return (
    
    <section>
      <h1>TODAY I DO</h1>
      {
        completedListNum > 0 ? Math.round((completedListNum / allListNum) * 100) : "0"
      }%
    </section>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodaySection);