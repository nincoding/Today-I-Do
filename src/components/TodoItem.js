import React, { useRef, useEffect } from "react";

const TodoItem = (props) => {

  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  }

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({id, item: value });
      inputRef.current.disabled = true;
    }
  }

  return (
    <div>
      <li key={item.id}>
        <button onClick={() => completeTodo(item.id)}>Complete</button> 
        <textarea 
          ref={inputRef} 
          disabled={inputRef} 
          defaultValue={item.item}
          onKeyPress={(e)=> update(item.id, inputRef.current.value, e)}
        />
        <button onClick={() => changeFocus()}>Edit</button> 
        <button onClick={() => removeTodo(item.id)}>Delete</button> {" "}
      </li>
    </div>
  )
}

export default TodoItem;