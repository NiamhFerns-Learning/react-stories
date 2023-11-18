import { SyntheticEvent, useState } from 'react';
import { StoryData, StoryListData } from './Story';

const statusOptions = [
  'not_started',
  'blocked',
  'in_progress',
  'Awaiting_aproval',
  'completed',
];

export function StoryAdder({ onAdd }: { onAdd: (item: StoryData) => void }) {
  // Change this to be individual state vars.
  const [form, setForm] = useState({
    uuid: '',
    title: '',
    description: '',
    dueDate: '',
    status: '',
    list: '',
  });

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    onAdd(
      new StoryData(
        '',
        form.title,
        form.description,
        form.dueDate,
        form.status,
        '',
      ),
    );
    setForm({
      uuid: '',
      title: '',
      description: '',
      dueDate: '',
      status: '',
      list: '',
    });
    console.log('Form submitted.');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='todo_form'>
        <div>
          <label>
            <input
              type='text'
              placeholder='What to do?'
              value={form.title}
              onChange={(e) => {
                setForm({ ...form, title: e.target.value });
              }}
              className='input_full'
              required
            ></input>
          </label>
        </div>
        <div>
          <label>
            <p>Description</p>
            <input
              type='text'
              placeholder='Describe your task...'
              value={form.description}
              onChange={(e) => {
                setForm({ ...form, description: e.target.value });
              }}
              className='input_multi'
              required
            ></input>
          </label>
        </div>
        <div>
          <label>
            <p>Due Date</p>
            <input
              type='date'
              value={form.dueDate}
              onChange={(e) => {
                setForm({ ...form, dueDate: e.target.value });
              }}
              className='input_standard'
            ></input>
          </label>
        </div>
        <div>
          <label>
            <p>Status</p>
            <select
              name='status'
              id='status'
              onChange={(e) => {
                setForm({ ...form, status: e.target.value });
              }}
              className='input_standard'
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
            <input
              type='submit'
              value='Add Story'
              className='submit_button'
            ></input>
          </label>
        </div>
      </form>
    </>
  );
}
