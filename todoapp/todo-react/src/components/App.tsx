import React, { useRef } from "react";

import { useTodo } from "../hooks/useTodo";
import { Todo } from "../types/Todo";
import { TodoTitle } from "./TodoTitle";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

function App() {
  const { todoList, updateTodoListItem, addTodoListItem, deleteTodoListItem } = useTodo();

  const inputEl = useRef<HTMLTextAreaElement>(null);

  const handleAddTodoListItem = () => {
    if (inputEl.current?.value === "") {
      return;
    }
    addTodoListItem(inputEl.current!.value);
    inputEl.current!.value = "";
  };

  const incompletedList = todoList.filter((todo: Todo) => todo.text);

  return (
    <>
  <TodoTitle title="TODOアプリ" as="h1" />
  <TodoAdd buttonText="追加" inputEl={inputEl} handleAddTodoListItem={handleAddTodoListItem} />
  <TodoList todoList={incompletedList} updateTodoListItem={updateTodoListItem} deleteTodoListItem={deleteTodoListItem} title="TODOリスト" as="h2" />
  </>
  );
}

export default App;
