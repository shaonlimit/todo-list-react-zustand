import React from 'react';
import { toast } from 'react-hot-toast';
import { useList } from '../store';

export const Todo = ({ list }) => {
  const deleteTask = useList((state) => state.deleteTask);
  const completedTask = useList((state) => state.completedTask);
  const editTask = useList((state) => state.editTask);
  const removeTask = () => {
    deleteTask(list);
    toast.success('Task deleted!');
  };
  const finishedTask = () => {
    completedTask(list);
    toast.success('Task completed!');
  };
  const editThisTask = () => {
    if (list.completed === true) {
      toast.error('Task already completed!');
      return;
    }
    editTask(list);
  };
  console.log(list);
  return (
    <div className='bg-[#2dd4bf] text-white px-4 py-2 rounded flex justify-between text-xl mb-4'>
      <p
        onClick={finishedTask}
        className={`${
          list.completed ? 'line-through cursor-pointer' : 'cursor-pointer'
        }`}
      >
        {list.task}
      </p>
      <div>
        <i
          className='bx bxs-message-square-edit cursor-pointer mr-2'
          onClick={editThisTask}
        ></i>
        <i
          className='bx bxs-message-square-x cursor-pointer'
          onClick={removeTask}
        ></i>
      </div>
    </div>
  );
};
