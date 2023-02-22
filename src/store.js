import { create } from 'zustand';

export const useList = create((set) => ({
  todoList: [],
  addTask: (list) =>
    set((state) => {
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: state.todoList.length + 1,
            task: list,
            completed: false,
            isEditing: false,
          },
        ],
      };
    }),
  deleteTask: (list) =>
    set((state) => {
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== list.id),
      };
    }),

  completedTask: (list) =>
    set((state) => {
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id === list.id ? { ...item, completed: true } : item
        ),
      };
    }),
  editTask: (list) =>
    set((state) => {
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id === list.id ? { ...item, isEditing: !item.isEditing } : item
        ),
      };
    }),
  updateTask: (list, task) =>
    set((state) => {
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id === list.id
            ? { ...item, task: task, isEditing: !item.isEditing }
            : item
        ),
      };
    }),
}));
