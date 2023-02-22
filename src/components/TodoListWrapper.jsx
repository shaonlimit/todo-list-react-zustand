import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useList } from '../store';
import { EditTodoForm } from './EditTodoForm';
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';

export const TodoListWrapper = () => {
  const todoList = useList((state) => state.todoList);

  return (
    <div className='todo-list w-2/5 mx-auto bg-[#164e63] py-4 px-8 rounded mt-8'>
      <h1 className='text-white text-3xl uppercase text-center font-bold mb-4 '>
        Get Things Done!
      </h1>
      <TodoForm />

      {todoList.map((list, index) =>
        list.isEditing ? (
          <EditTodoForm key={index} list={list} />
        ) : (
          <Todo key={index} list={list} />
        )
      )}

      <Toaster position='top-center' reverseOrder={false} />
    </div>
  );
};
