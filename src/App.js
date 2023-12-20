import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main/Main";
import ErrorBoundary from "./components/Error/ErrorBoundary";

import React from "react";
import "./styels.css";
import DisplayButton from "./components/Task1/DisplayButton";
import ToDoList from "./components/Task2/ToDoList";

import { config } from "./config";
function App() {
  return (
    //---------------way - 1 -----------------------------------------------------
    //---------------way - 1 -----------------------------------------------------
    //---------------way - 1 -----------------------------------------------------
    // <div>
    //   <Routes>
    //     <Route element={<Main />} path="/">
    //       <Route Component={DisplayButton} path="/display"></Route>
    //       {/* we can also write element instead of Component , Component just do not require `"<""/>"` brackets. */}
    //       <Route Component={ToDoList} path="/todolist"></Route>
    //       <Route Component={DisplayButton} path="/display"></Route>
    //     </Route>
    //   </Routes>
    // </div>

    //---------------way - 2 -----------------------------------------------------
    //-we can store the data in config file and run map
    //---------------way - 1 -----------------------------------------------------
    <ErrorBoundary>
      <div>
        <Routes>
          <Route Component={Main}>
            {config.map((ele) => {
              return (
                <Route
                  key={ele.id}
                  Component={ele.Component}
                  path={ele.path}
                ></Route>
              );
            })}

            {/* for "/"  */}
            <Route path="/" Component={DisplayButton} />
            <Route path="*" element={<div>Page is not Avaialable</div>} />
          </Route>
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
