import { SyntheticEvent, useState } from 'react';
import { ToDoItem } from './ToDoItem';

const statusOptions = [
  'not_started',
  'blocked',
  'in_progress',
  'Awaiting_aproval',
  'completed',
];

export function ItemAdder({ onAdd }: { onAdd: (item: ToDoItem) => void }) {
  // Change this to be individual state vars.
  const [form, setForm] = useState({
    title: '',
    description: '',
    added: '',
    started: '',
    completed: '',
    status: '',
  });

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    onAdd(new ToDoItem(form.title, '', '', '', '', ''));
    setForm({
      title: '',
      description: '',
      added: '',
      started: '',
      completed: '',
      status: '',
    });
    console.log('Form submitted.');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='todo_form'>
        <div>
          <label>
            Title
            <input
              type='text'
              placeholder='What to do?'
              value={form.title}
              onChange={(e) => {
                setForm({ ...form, title: e.target.value });
              }}
              required
            ></input>
          </label>
        </div>
        <div>
          <label>
            Description
            <input type='text' placeholder='Describe your task...'></input>
          </label>
        </div>
        <div>
          <label>
            Date Added
            <input type='date'></input>
          </label>
        </div>
        <div>
          <label>
            Date Started
            <input type='date'></input>
          </label>
        </div>
        <div>
          <label>
            Date Completed
            <input type='date'></input>
          </label>
        </div>
        <div>
          <label>
            Status
            <select name='status' id='status'>
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option
                    .split('_')
                    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
                    .join(' ')}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            <input type='submit' value='Add To-Do'></input>
          </label>
        </div>
      </form>
    </>
  );
}
