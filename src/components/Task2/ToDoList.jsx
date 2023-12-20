// import React, { useState } from "react";

// const ToDoList = () => {
//   const [space, setSpace] = useState("");
//   const OnchangeHandler = (e) => {
//     console.log(e.target.value);
//   };

//   const SubmitButtonHandler = (e) => {
//     e.preventDefault();
//     console.log("lsknfn");

//     let addition = "";
//     addition += `<li>skjdckjnjn</li>`;
//     setSpace(addition);

//     // const para = document.createElement("p");
//     // para.innerHTML = e.target.value;
//     // document.getElementsByClassName("newList").innerHTML = para;
//   };
//   return (
//     <div>
//       <h1> To Do List in React</h1>
//       <form onSubmit={SubmitButtonHandler}>
//         <input type="text" onChange={OnchangeHandler}></input>
//         <button type="Submit">Add</button>
//       </form>
//       <div>
//         <ul className="newList">{space}</ul>
//       </div>
//     </div>
//   );
// };

// export default ToDoList;


import React from "react";
const ToDoList = () => {
  return <div>ToDoList</div>;
};

export default ToDoList;
