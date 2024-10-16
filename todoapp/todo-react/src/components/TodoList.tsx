import { TodoTitle } from "./TodoTitle";
import { TodoItem } from "./Todoitem";
import { Todo } from "../types/Todo";

export const TodoList = ({
  todoList,
  updateTodoListItem,
  deleteTodoListItem,
  title,
  as,
}: {
  todoList: Todo[];
  updateTodoListItem: (id: string,value: string) => void;
  deleteTodoListItem: (id: string) => void;
  title: string;
  as: string;
}) => {
  return (
    <>
      {todoList.length !== 0 && (
        <>
        <TodoTitle title={title} as={as} />
        <div>
          <table>
            <tr>
              <th>ＮＯ</th><th>　　　　　ＴＯＤＯ　内容　　　　　</th><th>ＴＯＤＯ追加更新日時</th><th>　更新　</th><th>　削除　</th>
            </tr>
            {todoList.map((todo) => (
              <tr key={todo.id}>
                <TodoItem todo={todo} key={todo.id} updateTodoListItem={updateTodoListItem} deleteTodoListItem={deleteTodoListItem} />
              </tr>
            ))}
          </table>
        </div>
        </>
      )}
    </>
  );
};
