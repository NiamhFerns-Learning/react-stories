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
    completed: '',
    status: '',
  });

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    onAdd(
      new ToDoItem(
        form.title,
        form.description,
        form.added,
        form.completed,
        form.status,
      ),
    );
    setForm({
      title: '',
      description: '',
      added: '',
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
            <input
              type='text'
              placeholder='Describe your task...'
              value={form.description}
              onChange={(e) => {
                setForm({ ...form, description: e.target.value });
              }}
              required
            ></input>
          </label>
        </div>
        <div>
          <label>
            Date Added
            <input
              type='date'
              value={form.added}
              onChange={(e) => {
                setForm({ ...form, added: e.target.value });
              }}
            ></input>
          </label>
        </div>
        <div>
          <label>
            Date Completed
            <input
              type='date'
              value={form.completed}
              onChange={(e) => {
                setForm({ ...form, completed: e.target.value });
              }}
            ></input>
          </label>
        </div>
        <div>
          <label>
            Status
            <select
              name='status'
              id='status'
              value={'Not Started'}
              onChange={(e) => {
                setForm({ ...form, status: e.target.value });
              }}
            >
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
