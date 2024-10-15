import axios from "axios";

const todoDataUrl = "http://localhost/api/todo"

export const getAllTodosData = async () => {
    const response = await axios.get(todoDataUrl);
    return response.data;
};
export const addTodoData = async (text: string) => {
  const response = await axios.post(`${todoDataUrl}`,{text:text});
  return response.data;
};
export const deleteTodoData = async (id: string) => {
  await axios.delete(`${todoDataUrl}/?id=${id}`);
  return id;
};
export const updateTodoData = async (id: string, text: string | undefined) => {
  const response = await axios.put(`${todoDataUrl}/?id=${id}`, {text:text});
  return response.data;
};
