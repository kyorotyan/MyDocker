import { useState, useEffect } from "react";
import * as todoData from "../apis/todos";
import { Todo } from "../types/Todo";

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    todoData.getAllTodosData().then((todo) => {
      setTodoList([...todo].reverse());
    });
  }, []);

  const updateTodoListItem = (id: string, value: string) => {
    const todoItem = todoList.find((item: Todo) => item.id === id);
    if(!todoItem){
        return;
    }
    const newTodoItem: string = value;
    
    todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
      const newTodoList = todoList.map((item) => (item.id !== updatedTodo.id ? item : updatedTodo));
      setTodoList(newTodoList);
    });
  };

  const addTodoListItem = (todoText: string) => {
    const newTodoItem = todoText;

    todoData.addTodoData(newTodoItem).then((addTodo) => {
      setTodoList([addTodo, ...todoList]);
    });
  };

  const deleteTodoListItem = (id: string) => {
    todoData.deleteTodoData(id).then((deletedid) => {
      const newTodoList = todoList.filter((item) => item.id !== deletedid);
      setTodoList(newTodoList);
    });
  };

  return { todoList, updateTodoListItem, addTodoListItem, deleteTodoListItem };
};
