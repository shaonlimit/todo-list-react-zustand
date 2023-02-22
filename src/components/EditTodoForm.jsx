import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useList } from '../store';

export const EditTodoForm = ({ list }) => {
  const updateTask = useList((state) => state.updateTask);

  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
    e.target.value = '';
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      toast.error(`Task can't be empty!`);
      setValue('');
      return;
    }
    updateTask(list, value);
    setValue('');
    toast.success('Task Updated!');
  };

  return (
    <form onSubmit={handleSubmit} className='mb-8'>
      <div className='add-form flex '>
        <input
          type='text'
          placeholder={list.task}
          className='border-none outline-1 outline-[#2dd4bf]  px-4 py-2 w-4/5 rounded-l '
          onChange={handleChange}
          value={value}
        />
        <button
          type='submit'
          className='bg-[#2dd4bf] text-white px-2 rounded-r w-1/5 active:scale-110'
        >
          Update
        </button>
      </div>
    </form>
  );
};
