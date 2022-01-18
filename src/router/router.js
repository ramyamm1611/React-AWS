import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import TodoList from "../todo/TodoList";

const Router = () => {
  return (
    <HashRouter forceRefresh={true}>
      <Routes>
        <Route path="/" element={<TodoList />} exact />
      </Routes>
    </HashRouter>
  );
};

export default Router;
