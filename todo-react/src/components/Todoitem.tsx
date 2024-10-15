import React,{useState} from "react";
import { Todo } from "../types/Todo";

export const TodoItem = ({ todo, updateTodoListItem, deleteTodoListItem }: { todo: Todo; updateTodoListItem: any; deleteTodoListItem: any }) => {
  
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [active, setActive] = useState(false);

  const handleChangeText = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    if(event.target.value===""){
      setDisabled(true);
      setActive(false);  
    }else{
      setDisabled(false);
      setActive(true);
      setValue(event.target.value);
    }
  };
  
  const handleUpdateTodoListItem = () =>{
    updateTodoListItem(todo.id,value);
    setDisabled(true);
    setActive(false);
  }

  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

  const year = todo.updated_at.substring(0,4);
  const month = todo.updated_at.substring(5,7);
  const day = todo.updated_at.substring(8,10);
  const hour = String(Number(todo.updated_at.substring(11,13)) + 9);
  const minute = todo.updated_at.substring(14,16);
  const second = todo.updated_at.substring(17,19);
  const datetime = year+"年"+month+"月"+day+"日"+hour+"時"+minute+"分"+second+"秒"

  return (
    <>
      <td>{todo.id}</td>
      <td><input type="text" defaultValue={todo.text} onChange={handleChangeText} /></td>
      <td><input type="text" value={datetime} /></td>
      <td><button id={todo.id} onClick={handleUpdateTodoListItem} disabled={disabled}>{!active ? "":"更新"}</button></td>
      <td><button type="button" onClick={handleDeleteTodoListItem}>削除</button></td>
    </>
  );
};
