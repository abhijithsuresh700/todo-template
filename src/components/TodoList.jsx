import React from "react";

const TodoList = () => {
  return (
    <>
      <ul>
        <React.Fragment>
          <li
            className={`todo-item`}
            style={{
              backgroudColor: "white",
            }}
          >
            <span className="todo-item-col-1">
              <input type="checkbox" />
            </span>
            <span>Hello World</span>
            <button className="delete-btn">Delete</button>
          </li>
        </React.Fragment>
      </ul>
    </>
  );
};

export default TodoList;
